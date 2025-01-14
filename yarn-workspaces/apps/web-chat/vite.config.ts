import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 6061,
    host: '0.0.0.0',
  },
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
    },
  },
});
