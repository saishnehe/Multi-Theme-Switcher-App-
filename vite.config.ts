// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Multi-Theme-Switcher-App-/', // 👈 MUST match your GitHub repo name exactly
  plugins: [react()],
});
