import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: /\.(png|jpe?g|gif|svg|css|js|json)$/ ,
  plugins: [react()],
  base: "/"
})
