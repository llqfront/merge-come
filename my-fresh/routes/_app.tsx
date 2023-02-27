import { AppProps } from "$fresh/server.ts";
import {  AppState, createAppState } from "../stores/index.ts";
export default function App({ Component }: AppPropss) {
  return (
    <>
            <a href="/">首页</a><br/>
            <a href="/home">首页</a><br/>
            <a href="/test">test</a><br/>
            <a href="/bbbb">bbbb</a><br/>
          <AppState.Provider value={createAppState()}>
            <Component/>
          </AppState.Provider>
    </>
  );
}
