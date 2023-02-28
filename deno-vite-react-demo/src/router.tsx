import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./views/layouts/DefaultLayout.tsx";
const HomePage = lazy(() => import("./views/Home/index.tsx"));
const AboutPage = lazy(() => import("./views/About/index.tsx"));

function RouteNotFound() {
  return <div>Not found</div>;
}

export default function Router() {
    return(
        <Suspense fallback={<div>Page is Loading...</div>}>
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="*" element={<RouteNotFound />} />
            </Route>
          </Routes>
        </Suspense>
    )
}
