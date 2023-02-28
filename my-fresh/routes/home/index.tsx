import { Head } from "$fresh/runtime.ts";
import { useState,useContext,useEffect } from "preact/hooks";
import Test from "~/islands/Test.tsx";
import {  AppState, createAppState } from "~/stores/index.ts";
// import { signal, computed, effect } from "@preact/signals-core";
import { Com } from "~/components/Pub.tsx";
export default function Home() {

    const state = useContext(AppState);
  return (
    <>
      <div>

        signal--{state.completed.value}----
        <Test/>
      </div>
      <Com/>
    </>
  );
}
