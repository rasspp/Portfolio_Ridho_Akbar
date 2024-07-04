import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// tambahkan ini jika tailwind tidak berfungsi
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
// dan tambahkan ini juga jika tailwind tidak berfungsi
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})
