import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/__tests__/setup.ts',
  },
});
