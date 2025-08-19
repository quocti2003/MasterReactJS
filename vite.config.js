import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Vercel sẽ dùng '/', GitHub Pages dùng '/scratchy-nib/'
  base: process.env.VERCEL ? '/' : (process.env.NODE_ENV === 'production' ? '/scratchy-nib/' : '/'),
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'docs'
  }
})
