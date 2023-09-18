import TodoList from "./TodoList";
import { todoItems } from "../data/data";
import TodoForm from "./TodoForm";
import { useCallback, useState } from "react";

function App() {
  const [todos, setTodos] = useState(todoItems);

  const handleAdd = useCallback((todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  }, []);

  const handleRemove = useCallback((id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const toggleComplete = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      })
    );
  }, []);

  return (
    <div className="app">
      <h1 className="title">Todo List</h1>
      <TodoList
        items={todos}
        handleRemove={handleRemove}
        toggleComplete={toggleComplete}
      />
      <TodoForm handleAdd={handleAdd} />
    </div>
  );
}

export default App;
