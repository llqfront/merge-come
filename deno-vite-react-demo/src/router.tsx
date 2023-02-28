import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./views/layouts/DefaultLayout.tsx";
// import HomePage from "./views/Home/index.tsx";
// import AboutPage from "./views/About/index.tsx";
// import DemoPage from "./views/Demo/index.tsx";
// import NotFound from "./views/NotFound/index.tsx";
const HomePage = lazy(() => import("./views/Home/index.tsx"));
const AboutPage = lazy(() => import("./views/About/index.tsx"));
const DemoPage = lazy(() => import("./views/Demo/index.tsx"));
const NotFound = lazy(() => import("./views/NotFound/index.tsx"));


// <Suspense fallback={<div>Page is Loading...</div>}>

export default function Router() {
    return(
        <Suspense fallback={<div>Page is Loading...</div>}>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/demo" element={<DemoPage />} />
                    <Route index path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </Suspense>
    )
}
