import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { CryptoPage } from "./pages/CryptoPage/CryptoPage";
import { Layout } from "./components/Layout/Laytou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "crypto", element: <CryptoPage /> },
      { path: "crypto/:cryptoId", element: <CryptoPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
