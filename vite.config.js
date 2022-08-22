import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
        }),
        react(),
        
    ],
    server: {
        host: "192.168.56.56",
        watch: {
          usePolling: true,
        }
    },
});
