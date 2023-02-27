import hydrate from "ultra/hydrate.js";
import App from "./src/app.tsx";

// React Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./router/index.tsx";
let router = createBrowserRouter(routes);
function ClientApp() {
  return (
    <React.StrictMode>
        <RouterProvider router={router} fallbackElement={null} />
    </React.StrictMode>
  );
}

hydrate(document, <ClientApp />);
