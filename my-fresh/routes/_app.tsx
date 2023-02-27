import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppPropss) {
  return (
    <>
        <a href="/">首页</a><br/>
        <a href="/test">test</a><br/>
        <a href="/bbbb">bbbb</a><br/>
        <Component/>
    </>
  );
}
