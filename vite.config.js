// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Export configuration
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Website-React-Bootstrap/',   // Correct base path
});
