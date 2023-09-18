import React, { memo, useState } from "react";
import createTodo from "../models/todo-factory";

interface TodoFormProps {
  handleAdd: (todo: Todo) => void;
}
function TodoForm({ handleAdd }: TodoFormProps) {
  const [text, setText] = useState("");

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
    console.log("on change");
  };

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text != "") {
      handleAdd(createTodo(text));
      setText("");
    } else {
      alert("Todo text is empty");
    }
  };

  console.log("Form rendered");

  return (
    <form className="todo-form" onSubmit={submitForm}>
      <input
        className="todo-input"
        type="text"
        name="content"
        id="todo-content"
        value={text}
        onChange={onChangeText}
      />
      <button className="todo-add-button" type="submit">
        ADD
      </button>
    </form>
  );
}

export default memo(TodoForm);
