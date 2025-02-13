import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./i18n"; // ✅ Импорт i18n перед рендерингом

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </React.StrictMode>
  );
} else {
  console.error("Ошибка: элемент #root не найден.");
}
