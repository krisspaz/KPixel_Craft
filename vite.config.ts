import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: true, // Escucha en red local
    port: 5178, // <--- CAMBIADO de 8080 a 3000 (o usa 5173)
    strictPort: true, // Si el 3000 está ocupado, fallará en lugar de cambiar
    hmr: {
      clientPort: 5178, // <--- Asegúrate de que coincida con el puerto de arriba
      overlay: false,   // <--- DESACTIVA el overlay de errores por ahora para evitar el crash
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));