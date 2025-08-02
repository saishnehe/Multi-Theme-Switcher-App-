import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Multi-Theme-Switcher-App-/',   // ← repo name exact
  plugins: [react()],
});
