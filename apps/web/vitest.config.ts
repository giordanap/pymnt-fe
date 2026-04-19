import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    globals: true,
  },
  resolve: {
    // Use browser-targeted exports so React hooks (including `use`) resolve correctly.
    conditions: ['browser', 'module', 'main'],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
