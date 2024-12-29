// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Optional: Add path alias
    },
  },
  optimizeDeps: {
    exclude: ['react', 'react-dom'], // Ensure these are not pre-bundled
  },
});