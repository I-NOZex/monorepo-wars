import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  server: {
    port: 6062,
  },
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
});
