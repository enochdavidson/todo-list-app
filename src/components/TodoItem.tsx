import { memo } from "react";

interface Props {
  todo: Todo;
  handleRemove: (id: number) => void;
  toggleComplete: (id: number) => void;
}

function TodoItem({ todo, handleRemove, toggleComplete }: Props) {
  return (
    <div className="todo-item">
      <input
        className="todo-item-checkbox"
        type="checkbox"
        name="complete"
        id="complete"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <label className={todo.completed ? "todo-item-completed" : ""}>
        {todo.text}
      </label>
      <button className="delete" onClick={() => handleRemove(todo.id)}>
        X
      </button>
    </div>
  );
}

export default memo(TodoItem);
