import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { setupStore } from './stores/index.ts';
const store = setupStore();
import useServerContext from "ultra/hooks/use-server-context.js";
import { DefaultLayout } from "./layouts/DefaultLayout.tsx";
const HomePage = lazy(() => import("./pages/Home/index.tsx"));
const AboutPage = lazy(() => import("./pages/About/index.tsx"));
const DemoPage = lazy(() => import("./pages/Demo/index.tsx"));

function RouteNotFound() {
  useServerContext((context) => {
    context.status(404);
  });
  return <div>Not found</div>;
}

export default function Router() {
    return(
        <Provider store={store}>
            <Suspense fallback={<div>Page is Loading...</div>}>
              <Routes>
                <Route path="/" element={<DefaultLayout />}>
                  <Route index element={<HomePage />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="demo" element={<DemoPage />} />
                  <Route path="*" element={<RouteNotFound />} />
                </Route>
              </Routes>
            </Suspense>
        </Provider>
    )
}
