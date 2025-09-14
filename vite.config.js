import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react( ),tailwindcss()],
  base: './', // <--- ¡Añade esta línea aquí!
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    allowedHosts: [
      '5173-i3h6tuxpetlr44t4ouzul-10fd30d8.manusvm.computer'
    ]
  }
})