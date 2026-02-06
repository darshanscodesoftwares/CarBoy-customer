import { useSearchParams } from "react-router-dom";
import "./BookingSuccess.css";

export default function BookingSuccess() {
  const [searchParams] = useSearchParams();
  const requestId = searchParams.get("requestId");

  return (
    <div className="booking-success">
      <div className="booking-success__card">
        <h1>Booking Submitted Successfully</h1>
        <p>
          Your Request ID: <strong>{requestId || "Pending"}</strong>
        </p>
        <p>Our team will review and assign a technician.</p>
      </div>
    </div>
  );
}
