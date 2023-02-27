import { createContext } from "preact";
import { signal, computed } from "@preact/signals";

// 创建 App 状态
export function createAppState() {
  const todos = signal([
      { text: "Buy gr333oceries" },
      { text: "Walk the dog" },
  ]);
  const completed = computed(() => {
    return todos.value.filter(todo => todo.completed).length
  });
  return { todos, completed }
}

export const AppState = createContext();
