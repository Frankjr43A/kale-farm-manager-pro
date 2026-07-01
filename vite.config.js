import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/kale-farm-manager-pro/",
  plugins: [react()],
});