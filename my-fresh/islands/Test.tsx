import { useState,useContext } from "preact/hooks";
import { signal, computed } from "@preact/signals";
import { useSignal, useComputed } from "@preact/signals";
const count = signal(0);
const todos = signal([
  // { text: "Buy groceries" },
  // { text: "Walk the dog" },
  { text: "Buy groceries", completed: true },
  { text: "Walk the dog", completed: false },
]);
const text = signal("");
function addTodo() {
  todos.value = [...todos.value, { text: text.value }];
  text.value = ""; // Clear input value on add
}
function removeTodo(todo) {
  todos.value = todos.value.filter(t => t !== todo);
}
// 基于其他 signals 创建衍生 signal
const completed = computed(() => {
  // 当 todos 变化，这里会自动重新计算
  return todos.value.filter(todo => todo.completed).length;
});
console.log(completed.value);

import {  AppState, createAppState } from "~/stores/index.ts";

export default function Counter() {

    const onInput = event => (text.value = event.target.value);

    const counts = useSignal(0);
    const double = useComputed(() => counts.value * 2);
    
    const testfn = () =>{

    }
  return (
    <>
    <br/>
    ---
    <div>
      <p>{counts} x 2 = {double}</p>
      <button onClick={() => counts.value++}>click me</button>
    </div>
    ----
    <div>
        <h1 onClick={() => count.value++}>
        +
        {console.log("++")}
        </h1>
      <span data-id={count}>{Math.random()}</span>
    </div>

    <p onClick={testfn}>asdfasdfas</p>
    <input value={text.value} onInput={onInput} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.value.map(todo => (
          <li>
            {todo.text}{' '}
            <button onClick={() => removeTodo(todo)}>❌</button>
          </li>
        ))}
      </ul>
    </>
  );
}
