import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-resume-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.includes('/resume/Muthubala_Resume.pdf')) {
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'inline; filename="Muthubala_Resume.pdf"');
          }
          next();
        });
      }
    }
  ],
  server: {
    port: 3000,
    host: true,
    open: false
  }
});
