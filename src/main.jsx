import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import homeLoader from "./pages/home/loader";
import { action as homeAction } from "./pages/home/action";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/portfolio-app/",
    element: <Home />,
    loader: homeLoader,
    action: homeAction,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
