import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import vitePluginRequire from 'vite-plugin-require';

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
    if(command === 'build') 
        return {
            base: "/frontendmentor-SpaceTourismWebsiteMain",
            plugins: [
                react(),
            ],
        }
    else 
        return {
            plugins: [
                react(),
            ],
        }
})
// export default defineConfig({
//     base: "/frontendmentor-SpaceTourismWebsiteMain",
// 	plugins: [
//         react(),
//         // vitePluginRequire.default()
//     ],
// })