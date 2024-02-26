import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: "QA-Blog",
    plugins: [vue()],
    build: {
        minify: true,
    },
    server: {
        proxy: {}
    }
})
