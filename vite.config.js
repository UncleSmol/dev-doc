import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [react(), svgr()],
  base: "/dev-doc/",
  server: {
    allowedHosts: [
      "98qz5d-5173.csb.app", // Your current CodeSandbox host
      ".csb.app", // Allow all CodeSandbox subdomains
    ],
    host: true, // Listen on all network interfaces
  },
});
