import React from "react";

const TodoItem = ({ todo, onToggleDone, onEdit, onDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        backgroundColor: todo.done ? "#f0f0f0" : "white",
        textDecoration: todo.done ? "line-through" : "none",
        opacity: todo.done ? 0.6 : 1,
      }}
    >
      <div>
        <h4>{todo.title}</h4>
        <p>{todo.description}</p>
      </div>
      <div>
        <button onClick={() => onToggleDone(todo._id)}>
          {todo.done ? "Undo" : "Done"}
        </button>
        <button onClick={() => onEdit(todo)}>Edit</button>
        <button onClick={() => onDelete(todo._id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
