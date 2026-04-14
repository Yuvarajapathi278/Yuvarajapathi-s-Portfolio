import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/Yuvarajapathi-s-Portfolio/', // Add this line for GitHub Pages
  server: {
    port: 5173,
    open: true
  }
})