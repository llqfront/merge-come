import { AppState, createAppState } from "~/stores/index.ts";
import { effect } from "@preact/signals-core";
import { useState,useContext } from "preact/hooks";
export function Com() {
    const state = useContext(AppState);
    const renderList = () => {
        return state.todos.value.map((item,index)=>{
            return (
                <li key={index}>{item.text}</li>
            )
        })
    }
    effect(() => {
        state.testSignal(
            [
                { text: "Buy groceries", completed: true },
                { text: "Walk the dog", completed: false },
            ]
        )
    });
  return (
    <>
    <ul>
        {
            state.todos.value.length && renderList()
        }
    </ul>
    </>
  );
}
