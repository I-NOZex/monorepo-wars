import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import vitePluginSingleSpa from 'vite-plugin-single-spa';

export default defineConfig({
  plugins: [react(),
    vitePluginSingleSpa(
    {
      type: 'mife',
      serverPort: 4101,
      spaEntryPoints: 'src/spa.tsx',
    }
  )],
  //build: { lib: { entry: 'src/main.tsx', name: 'app1', formats: ['es'] } },
});
