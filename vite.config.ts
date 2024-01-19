import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const envFile = ".env";
  return {
    define: {
      "process.env": dotenv.config({ path: envFile }).parsed,
    },
    plugins: [react()],
    base: "./",
    server: {
      port: 3000,
    },
  };
});
