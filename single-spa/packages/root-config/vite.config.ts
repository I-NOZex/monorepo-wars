import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vitePluginSingleSpa from 'vite-plugin-single-spa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSingleSpa({
      type: 'root',
      imo: '2.4.2'
    })
  ],
})
