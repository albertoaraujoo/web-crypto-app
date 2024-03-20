import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CryptoPage } from "./pages/CryptoPage/CryptoPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },

  { path: "/crypto", element: <CryptoPage /> },
  { path: "/crypto/:cryptoId", element: <CryptoPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
