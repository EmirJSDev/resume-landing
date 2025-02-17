import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import viteImagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    viteImagemin({
      webp: {
        quality: 75, // Оптимальная компрессия (0-100)
        method: 6, // Метод сжатия (0 - быстрее, 6 - лучше)
        lossless: false, // Если true — без потерь
        metadata: "none", // Убирает метаданные EXIF
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
    fs: {
      allow: ["public", "src"],
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: "esbuild", // Минификация через esbuild
    sourcemap: process.env.NODE_ENV !== "production", // Source maps только в dev
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
        manualChunks: {
          react: ["react", "react-dom"], // Выносит React в отдельный чанк
          mui: ["@mui/material", "@emotion/react", "@emotion/styled"], // Вынесение Material UI
        },
      },
      treeshake: true, // ✅ Правильное место для treeshaking
    },
    terserOptions: {
      compress: {
        drop_console: true, // Удаление console.log
        drop_debugger: true, // Удаление debugger
      },
      format: {
        comments: false, // Удаление комментариев в продакшене
      },
    },
    target: "esnext", // Оптимальный таргет для современных браузеров
  },
  cacheDir: "node_modules/.vite_cache", // Включаем кэширование Vite
  assetsInclude: ["**/*.webp"], // Включаем WebP в ассеты
  define: {
    "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
  },
  optimizeDeps: {
    include: ["react", "react-dom"], // Предзагрузка React
  },
});
