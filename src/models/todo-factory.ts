let todoSequence = 1;

export default function createTodo(text: string): Todo {
  let id = todoSequence++;
  return {
    id: id,
    text: text,
    completed: false,
  };
}
