import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInclude: /\.(png|jpe?g|gif|svg|css|js|json)$/, // Ekstensi file yang ingin diatur cache-control-nya
  },
  plugins: [react()],
  base: "/",
});
