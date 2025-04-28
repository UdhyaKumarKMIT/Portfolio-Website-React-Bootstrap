// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/UdhyaKumarKMIT/Portfolio-Website-React-Bootstrap', // IMPORTANT!
})
