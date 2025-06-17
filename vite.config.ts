import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  base: './',                // load JS/CSS from ./assets/…
  server: {
    host: '::',
    port: 8080,
  },
  plugins: [
    react(),                 // only the React plugin
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
