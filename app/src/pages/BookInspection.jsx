import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "./BookInspection.css";

const BOOKING_STORAGE_KEY = "carboy_booking_draft";
const CUSTOMER_API_URL =
  import.meta.env.VITE_CUSTOMER_API_BASE_URL || "http://localhost:5005";

async function geocodeAddress(address) {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}`
  );
  const data = await res.json();
  const { lat, lng } = data.results[0].geometry.location;
  return { lat, lng };
}

const mapFormToStorageShape = (form, lat, lng, serviceType) => ({
  serviceType,
  customerSnapshot: {
    name: form.customerName,
    phone: form.customerPhone,
    email: form.customerEmail,
  },
  vehicleSnapshot: {
    brand: form.vehicleBrand,
    model: form.vehicleModel,
    year: form.vehicleYear,
  },
  schedule: {
    date: form.scheduledDate,
    slot: form.scheduledSlot,
  },
  location: {
    address: form.locationAddress,
    coordinates: {
      lat,
      lng,
    },
  },
});

const mapStorageToFormShape = (saved) => ({
  form: {
    customerName: saved?.customerSnapshot?.name || "",
    customerPhone: saved?.customerSnapshot?.phone || "",
    customerEmail: saved?.customerSnapshot?.email || "",
    vehicleBrand: saved?.vehicleSnapshot?.brand || "",
    vehicleModel: saved?.vehicleSnapshot?.model || "",
    vehicleYear: saved?.vehicleSnapshot?.year || "",
    scheduledDate: saved?.schedule?.date || "",
    scheduledSlot: saved?.schedule?.slot || "",
    locationAddress: saved?.location?.address || "",
  },
  serviceType: saved?.serviceType || "PDI",
  coordinates: {
    lat: saved?.location?.coordinates?.lat ?? null,
    lng: saved?.location?.coordinates?.lng ?? null,
  },
});

export default function BookInspection() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const urlServiceType = searchParams.get("type") || "PDI";

  const initialForm = {
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    vehicleBrand: "",
    vehicleModel: "",
    vehicleYear: "",
    scheduledDate: "",
    scheduledSlot: "",
    locationAddress: "",
  };

  const [form, setForm] = useState({
    ...initialForm,
  });
  const [serviceType, setServiceType] = useState(urlServiceType);
  const [mapOpen, setMapOpen] = useState(false);
  const [selectedLat, setSelectedLat] = useState(null);
  const [selectedLng, setSelectedLng] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [mapError, setMapError] = useState("");
  const [draftRestored, setDraftRestored] = useState(false);
  const [hasRestored, setHasRestored] = useState(false);

  const currentYear = useMemo(() => new Date().getFullYear(), []);
  const minDate = useMemo(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return today.toISOString().split("T")[0];
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  const saveDraft = (latestForm, lat, lng, latestServiceType) => {
    const payload = {
      ...mapFormToStorageShape(latestForm, lat, lng, latestServiceType),
      lastSavedAt: new Date().toISOString(),
    };
    localStorage.setItem(BOOKING_STORAGE_KEY, JSON.stringify(payload));
  };

  const resetFormState = () => {
    setForm(initialForm);
    setSelectedLat(null);
    setSelectedLng(null);
    setMarkerPosition(null);
    setMapOpen(false);
    setErrors({});
    setMapError("");
    setDraftRestored(false);
    setServiceType(urlServiceType);
  };

  useEffect(() => {
    const saved = localStorage.getItem(BOOKING_STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const mapped = mapStorageToFormShape(parsed);
        setForm(mapped.form);
        setServiceType(urlServiceType);
        setSelectedLat(mapped.coordinates.lat);
        setSelectedLng(mapped.coordinates.lng);
        if (mapped.coordinates.lat !== null && mapped.coordinates.lng !== null) {
          setMarkerPosition({
            lat: mapped.coordinates.lat,
            lng: mapped.coordinates.lng,
          });
        }
        saveDraft(mapped.form, mapped.coordinates.lat, mapped.coordinates.lng, urlServiceType);
        setDraftRestored(true);
        setTimeout(() => setDraftRestored(false), 5000);
      } catch (err) {
        console.error("Failed to restore booking draft", err);
        localStorage.removeItem(BOOKING_STORAGE_KEY);
      }
    } else {
      setServiceType(urlServiceType);
      saveDraft(initialForm, null, null, urlServiceType);
    }
    setHasRestored(true);
  }, []);

  useEffect(() => {
    if (!hasRestored) {
      return;
    }
    setServiceType(urlServiceType);
    saveDraft(form, selectedLat, selectedLng, urlServiceType);
  }, [urlServiceType, hasRestored]);

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    const updatedForm = { ...form, [field]: value };
    setForm(updatedForm);
    setErrors((prev) => ({ ...prev, [field]: "" }));
    saveDraft(updatedForm, selectedLat, selectedLng, serviceType);
  };

  const validateForm = () => {
    const nextErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const maxYear = currentYear + 1;

    if (!form.customerName.trim()) {
      nextErrors.customerName = "Full name is required.";
    }

    if (!form.customerPhone.trim()) {
      nextErrors.customerPhone = "Phone number is required.";
    }

    if (!form.customerEmail.trim()) {
      nextErrors.customerEmail = "Email is required.";
    } else if (!emailPattern.test(form.customerEmail)) {
      nextErrors.customerEmail = "Enter a valid email address.";
    }

    if (!form.vehicleBrand.trim()) {
      nextErrors.vehicleBrand = "Brand is required.";
    }

    if (!form.vehicleModel.trim()) {
      nextErrors.vehicleModel = "Model is required.";
    }

    if (!form.vehicleYear) {
      nextErrors.vehicleYear = "Year is required.";
    } else {
      const yearValue = Number(form.vehicleYear);
      if (Number.isNaN(yearValue)) {
        nextErrors.vehicleYear = "Enter a valid year.";
      } else if (yearValue < 1900 || yearValue > maxYear) {
        nextErrors.vehicleYear = `Year must be between 1900 and ${maxYear}.`;
      }
    }

    if (!form.scheduledDate) {
      nextErrors.scheduledDate = "Scheduled date is required.";
    } else if (form.scheduledDate < minDate) {
      nextErrors.scheduledDate = "Date cannot be in the past.";
    }

    if (!form.scheduledSlot) {
      nextErrors.scheduledSlot = "Time slot is required.";
    }

    if (!form.locationAddress.trim()) {
      nextErrors.locationAddress = "Address is required.";
    }

    if (selectedLat === null || selectedLng === null) {
      nextErrors.locationCoordinates =
        "Please confirm the location pin on the map.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handlePickOnMap = async () => {
    setMapError("");
    if (!form.locationAddress.trim()) {
      setErrors((prev) => ({
        ...prev,
        locationAddress: "Address is required before opening the map.",
      }));
      return;
    }

    try {
      const { lat, lng } = await geocodeAddress(form.locationAddress);
      setMarkerPosition({ lat, lng });
      setSelectedLat(lat);
      setSelectedLng(lng);
      saveDraft(form, lat, lng, serviceType);
      setMapOpen(true);
    } catch (error) {
      console.error(error);
      setMapError("Unable to find the address. Please refine it and try again.");
    }
  };

  const handleConfirmLocation = () => {
    if (!markerPosition) {
      setMapError("Please drop the pin on the correct location.");
      return;
    }
    setSelectedLat(markerPosition.lat);
    setSelectedLng(markerPosition.lng);
    setMapOpen(false);
    setMapError("");
    setErrors((prev) => ({ ...prev, locationCoordinates: "" }));
    saveDraft(form, markerPosition.lat, markerPosition.lng, serviceType);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }

    const payload = {
      serviceType,
      customerSnapshot: {
        name: form.customerName,
        phone: form.customerPhone,
        email: form.customerEmail,
      },
      vehicleSnapshot: {
        brand: form.vehicleBrand,
        model: form.vehicleModel,
        year: Number(form.vehicleYear),
      },
      schedule: {
        date: form.scheduledDate,
        slot: form.scheduledSlot,
      },
      location: {
        address: form.locationAddress,
        coordinates: {
          lat: selectedLat,
          lng: selectedLng,
        },
      },
    };

    try {
      setLoading(true);

      const res = await axios.post(
        `${CUSTOMER_API_URL}/api/customer/inspection-request`,
        payload
      );

      const { requestId } = res.data.data;

      // STEP 2 — PAYMENT PLACEHOLDER (DO NOT IMPLEMENT NOW)
      // --------------------------------------------------
      // Later you will add:
      // const paymentRes = await axios.post(
      //   CUSTOMER_API_URL + "/api/customer/create-payment",
      //   { requestId }
      // );
      //
      // Then redirect to payment page / gateway
      // --------------------------------------------------

      if (res.status === 201) {
        localStorage.removeItem(BOOKING_STORAGE_KEY);
      }
      navigate(`/booking-success?requestId=${requestId}`);
    } catch (err) {
      console.error(err);
      alert("Failed to submit booking. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const mapContainerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <div className="book-inspection">
      <header className="book-inspection__header">
        <h1>Book Your Inspection</h1>
        <p>Fill in the details to schedule your inspection.</p>
        {draftRestored && (
          <div className="book-inspection__banner">
            Draft restored from your last session.
          </div>
        )}
        <button
          type="button"
          className="book-inspection__secondary-btn book-inspection__reset-btn"
          onClick={() => {
            localStorage.removeItem(BOOKING_STORAGE_KEY);
            resetFormState();
          }}
        >
          Start New Booking
        </button>
      </header>

      <form className="book-inspection__form" onSubmit={handleSubmit}>
        <section className="book-inspection__card">
          <h2>Customer Information</h2>

          <div className="book-inspection__field">
            <label htmlFor="customerName">Full Name *</label>
            <input
              id="customerName"
              type="text"
              value={form.customerName}
              onChange={handleChange("customerName")}
              placeholder="Enter your full name"
              required
            />
            {errors.customerName && (
              <span className="book-inspection__error">{errors.customerName}</span>
            )}
          </div>

          <div className="book-inspection__field">
            <label htmlFor="customerPhone">Phone *</label>
            <input
              id="customerPhone"
              type="tel"
              value={form.customerPhone}
              onChange={handleChange("customerPhone")}
              placeholder="Enter your phone number"
              required
            />
            {errors.customerPhone && (
              <span className="book-inspection__error">{errors.customerPhone}</span>
            )}
          </div>

          <div className="book-inspection__field">
            <label htmlFor="customerEmail">Email *</label>
            <input
              id="customerEmail"
              type="email"
              value={form.customerEmail}
              onChange={handleChange("customerEmail")}
              placeholder="Enter your email"
              required
            />
            {errors.customerEmail && (
              <span className="book-inspection__error">{errors.customerEmail}</span>
            )}
          </div>
        </section>

        <section className="book-inspection__card">
          <h2>Vehicle Information</h2>

          <div className="book-inspection__field">
            <label htmlFor="vehicleBrand">Brand *</label>
            <input
              id="vehicleBrand"
              type="text"
              value={form.vehicleBrand}
              onChange={handleChange("vehicleBrand")}
              placeholder="e.g., Hyundai"
              required
            />
            {errors.vehicleBrand && (
              <span className="book-inspection__error">{errors.vehicleBrand}</span>
            )}
          </div>

          <div className="book-inspection__field">
            <label htmlFor="vehicleModel">Model *</label>
            <input
              id="vehicleModel"
              type="text"
              value={form.vehicleModel}
              onChange={handleChange("vehicleModel")}
              placeholder="e.g., Creta"
              required
            />
            {errors.vehicleModel && (
              <span className="book-inspection__error">{errors.vehicleModel}</span>
            )}
          </div>

          <div className="book-inspection__field">
            <label htmlFor="vehicleYear">Year *</label>
            <input
              id="vehicleYear"
              type="number"
              min={1900}
              max={currentYear + 1}
              value={form.vehicleYear}
              onChange={handleChange("vehicleYear")}
              placeholder="e.g., 2024"
              required
            />
            {errors.vehicleYear && (
              <span className="book-inspection__error">{errors.vehicleYear}</span>
            )}
          </div>
        </section>

        <section className="book-inspection__card">
          <h2>Service Details</h2>

          <div className="book-inspection__field">
            <label htmlFor="serviceType">Service Type *</label>
            <input
              id="serviceType"
              type="text"
              value={serviceType}
              readOnly
              aria-readonly="true"
            />
          </div>

          <div className="book-inspection__field">
            <label htmlFor="scheduledDate">Scheduled Date *</label>
            <input
              id="scheduledDate"
              type="date"
              min={minDate}
              value={form.scheduledDate}
              onChange={handleChange("scheduledDate")}
              required
            />
            {errors.scheduledDate && (
              <span className="book-inspection__error">{errors.scheduledDate}</span>
            )}
          </div>

          <div className="book-inspection__field">
            <label htmlFor="scheduledSlot">Time Slot *</label>
            <select
              id="scheduledSlot"
              value={form.scheduledSlot}
              onChange={handleChange("scheduledSlot")}
              required
            >
              <option value="">Select a slot</option>
              <option value="11:00 AM – 01:00 PM">11:00 AM – 01:00 PM</option>
              <option value="01:00 PM – 03:00 PM">01:00 PM – 03:00 PM</option>
              <option value="03:00 PM – 05:00 PM">03:00 PM – 05:00 PM</option>
            </select>
            {errors.scheduledSlot && (
              <span className="book-inspection__error">{errors.scheduledSlot}</span>
            )}
          </div>
        </section>

        <section className="book-inspection__card">
          <h2>Location</h2>

          <div className="book-inspection__field">
            <label htmlFor="locationAddress">Address *</label>
            <input
              id="locationAddress"
              type="text"
              value={form.locationAddress}
              onChange={handleChange("locationAddress")}
              placeholder="Enter address for inspection"
              required
            />
            {errors.locationAddress && (
              <span className="book-inspection__error">{errors.locationAddress}</span>
            )}
          </div>

          <div className="book-inspection__map-actions">
            <button
              type="button"
              className="book-inspection__secondary-btn"
              onClick={handlePickOnMap}
            >
              Pick on Map
            </button>
          </div>

          {mapOpen && (
            <div className="book-inspection__map-wrapper">
              {isLoaded ? (
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={markerPosition}
                  zoom={14}
                >
                  {markerPosition && (
                    <Marker
                      position={markerPosition}
                      draggable
                      onDragEnd={(event) => {
                        const lat = event.latLng.lat();
                        const lng = event.latLng.lng();
                        setMarkerPosition({ lat, lng });
                        setSelectedLat(lat);
                        setSelectedLng(lng);
                        saveDraft(form, lat, lng, serviceType);
                      }}
                    />
                  )}
                </GoogleMap>
              ) : (
                <div className="book-inspection__map-loading">Loading map...</div>
              )}
              {mapError && <p className="book-inspection__error">{mapError}</p>}
              <button
                type="button"
                className="book-inspection__primary-btn"
                onClick={handleConfirmLocation}
              >
                Confirm Location
              </button>
            </div>
          )}

          <div className="book-inspection__coordinates">
            <div>
              <strong>Latitude:</strong> {selectedLat ?? "Not set"}
            </div>
            <div>
              <strong>Longitude:</strong> {selectedLng ?? "Not set"}
            </div>
            {errors.locationCoordinates && (
              <span className="book-inspection__error">
                {errors.locationCoordinates}
              </span>
            )}
          </div>
        </section>

        <section className="book-inspection__submit">
          <button
            type="submit"
            className="book-inspection__primary-btn"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Proceed to Booking"}
          </button>
        </section>
      </form>
    </div>
  );
}
