import { Head } from "$fresh/runtime.ts";

import {  AppState, createAppState } from "../../stores/index.ts";
import { useSignal, useComputed } from "@preact/signals";
import { signal, computed, effect } from "@preact/signals-core";

export default function Home(data) {
    const { todos, completed } = createAppState();
console.log(data)
  return (
    <>
      <div>home
      </div>
333333
    </>
  );
}
