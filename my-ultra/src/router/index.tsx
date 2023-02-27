import React, { Suspense,lazy } from 'react';
// import { lazy } from '@loadable/component';
const Home = lazy(() => import('../views/Home/index.tsx'));
const Demo = lazy(() => import('../views/Demo/index.tsx'));
const Test = lazy(() => import('../views/Test/index.tsx'));

export const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "demo",
        element: <Demo />,
      },
      {
        path: "test",
        element: <Test />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
];

// export default () => (
//     <>
//       <Suspense fallback={<div>loading</div>}>
//         <RouterProvider router={router} />
//       </Suspense>
//     </>
// )
