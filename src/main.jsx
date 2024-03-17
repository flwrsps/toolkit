import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes.jsx";
import TodoPages from "./page/TodoPages.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <TodoPages />
      <App />
      <MainRoutes />
    </Provider>
  </BrowserRouter>
);
