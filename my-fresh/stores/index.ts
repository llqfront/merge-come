// import { createContext } from "preact";
// import { signal, computed, batch,effect,useSignal, useComputed } from "@preact/signals";
// import { useState,useContext,useEffect } from "preact/hooks";
// // 创建 App 状态
// export function createAppState() {
//   const todos = signal([
//       { text: "Buy gr333oceries" },
//       { text: "Walk the dog" },
//   ]);
//   const count = signal(0);
//   const completed = computed(() => {
//     return todos.value.filter(todo => todo.completed).length
//   });
//   const testSignal = () => {
//       console.log(555)
//   }
//   const data = {
//       todos,
//       count,
//   }
//   return {
//       data,
//       completed,
//       testSignal,
//   }
// }
//
// export const AppState = createContext();
import { createContext } from "preact";
import { signal, computed } from "@preact/signals";
import { effect } from "@preact/signals-core";
// 创建 App 状态
function createAppState() {
  const todos = signal([]);

  const completed = computed(() => {
    return todos.value.filter(todo => todo.completed).length
  });
  function testSignal(arr) {
      todos.value = arr
      console.log(333)
      effect(() => {
          // 更新 count 但不订阅变化
          todos.value = todos.peek();
      });
  }

  return { todos, completed,testSignal }
}

const AppState = createContext();

export {
    createAppState,
    AppState
}
