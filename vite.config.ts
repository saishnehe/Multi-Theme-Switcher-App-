import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: '/multi-theme-switcher-app/',

  plugins: [react()],
});
