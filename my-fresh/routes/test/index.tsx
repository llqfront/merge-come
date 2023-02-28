import { Head } from "$fresh/runtime.ts";
import { useContext } from "preact/hooks";
import {  AppState, createAppState } from "~/stores/index.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Com } from "~/components/Pub.tsx";
interface User {
  login: string;
  name: string;
  avatar_url: string;
}

export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const { username } = ctx.params;
    const resp = await fetch(`https://api.xhanglu.com/api/advertise`);
    // const resp = await fetch(`https://api.github.com/users/llqfront`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const user: User = await resp.json();
    return ctx.render(user);
  },
};
export default function Home({ data }: PageProps<User | null>) {
    const state = useContext(AppState);
    const renderList = () => {
        return state.todos.value.map((item,index)=>{
            return (
                <li key={index}>{item.text}</li>
            )
        })
    }
    if (!data) {
    return <h1>User not found</h1>;
  }
  // console.log(state?.todos)
  return (
    <>
    <div>
    333
    <Com/>
    test
    <img src={data.avatar_url} width={64} height={64} />
    <h1>{data.name}</h1>
    <p>{data.login}</p>
  </div>
    </>
  );
}
