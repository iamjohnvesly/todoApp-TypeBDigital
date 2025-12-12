import React, { useState, useEffect } from "react";

const TodoForm = ({ onSubmit, editingTodo, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Title is required!");
      return;
    }
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">{editingTodo ? "Update" : "Add"}</button>
      {editingTodo && <button onClick={onCancel}>Cancel</button>}
    </form>
  );
};

export default TodoForm;
