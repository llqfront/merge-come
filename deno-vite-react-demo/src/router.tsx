import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./views/layouts/DefaultLayout.tsx";
import HomePage from "./views/Home/index.tsx";
import AboutPage from "./views/About/index.tsx";
import DemoPage from "./views/About/index.tsx";
// const HomePage = lazy(() => import("./views/Home/index.tsx"));
// const AboutPage = lazy(() => import("./views/About/index.tsx"));
// const DemoPage = lazy(() => import("./views/About/index.tsx"));

function RouteNotFound() {
  return <div>Not found</div>;
}
// <Suspense fallback={<div>Page is Loading...</div>}>

export default function Router() {
    return(
          <Routes>
            <Route path="/" element={<DefaultLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="demo" element={<DemoPage />} />
              <Route path="*" element={<RouteNotFound />} />
            </Route>
          </Routes>
    )
}
