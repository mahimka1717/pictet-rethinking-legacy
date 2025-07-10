import { defineConfig } from "vite";
import { resolve } from "path";
import handlebars from 'vite-plugin-handlebars';

export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        // Настройки SASS препроцессора
      },
    },
  },
  server: {
    host: true, // Слушаем на всех сетевых интерфейсах, доступно извне
    port: 3000, // Указываем стандартный порт явно
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    target: "es2015", // Обеспечивает поддержку старых браузеров
    minify: "terser", // Использовать terser для лучшей совместимости с браузерами
    sourcemap: true,
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
      },
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split(".");
          const extType = info[info.length - 1];
          if (/\.(css|scss|sass)$/.test(assetInfo.name)) {
            // Используем имя чанка для именования CSS/SCSS/SASS файлов
            return `assets/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
  },
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/hbs'),
    })
  ],
});
