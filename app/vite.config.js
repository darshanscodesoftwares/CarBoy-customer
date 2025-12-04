import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true,              // Important: Accept external connections
//     port: 5173,              // Same port you run ngrok on
//     allowedHosts: [
//       "earringed-cindie-unresurrected.ngrok-free.dev" // your ngrok URL
//     ],
//     strictPort: true
//   }
// });
