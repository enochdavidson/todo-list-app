import TodoItem from "./TodoItem";

interface Props {
  items: Todo[];
  handleRemove: (id: number) => void;
  toggleComplete: (id: number) => void;
}

export default function TodoList({
  items,
  handleRemove,
  toggleComplete,
}: Props) {
  return (
    <div className="todo-list">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          handleRemove={handleRemove}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}
