import useAsset from "ultra/hooks/use-asset.js";
import Router from "./router.tsx";
import { Provider } from 'react-redux';
import { setupStore } from '~/stores';
const store = setupStore();
export default function App() {
  console.log("Hello world!");
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Ultra</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={useAsset("/favicon.ico")} />
        <link rel="stylesheet" href={useAsset("/style.css")} />
      </head>
      <body>
        <Provider store={store}>
            <Router/>
        </Provider>
      </body>
    </html>
  );
}
