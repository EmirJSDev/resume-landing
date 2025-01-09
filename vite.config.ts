import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src', // Устанавливаем алиас для удобного импорта файлов из src
    },
  },
  server: {
    port: 3000, // Устанавливаем порт для разработки
    open: true, // Автоматическое открытие браузера
    cors: true, // Разрешаем запросы с других источников
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Адрес PHP-бэкенда
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''), // Удаляем /api из запроса, если нужно
      },
    },
  },
  build: {
    outDir: '../public', // Папка, куда будет генерироваться сборка (может быть изменена на ваш путь)
    emptyOutDir: true, // Удаление старых файлов перед сборкой
    sourcemap: true, // Генерация source maps для удобной отладки
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]', // Настраиваем файлы ассетов
        chunkFileNames: 'assets/[name].[hash].js', // JS-чанки
        entryFileNames: 'assets/[name].[hash].js', // Входные точки
      },
    },
  },
});
