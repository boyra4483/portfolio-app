import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import homeLoader from "./pages/home/loader";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
