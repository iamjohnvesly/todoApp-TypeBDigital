import React, { useEffect, useState } from "react";
import {
  fetchTodos,
  createTodo,
  updateTodo,
  toggleDone,
  deleteTodo,
} from "./api/todoApi";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  const loadTodos = async () => {
    setLoading(true);
    try {
      const res = await fetchTodos();
      setTodos(res.data.data);
      setError("");
    } catch (err) {
      setError("Failed to fetch todos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const handleAdd = async (todo) => {
    try {
      await createTodo(todo);
      loadTodos();
    } catch {
      alert("Failed to add todo");
    }
  };

  const handleUpdate = async (todo) => {
    try {
      await updateTodo(editingTodo._id, todo);
      setEditingTodo(null);
      loadTodos();
    } catch {
      alert("Failed to update todo");
    }
  };

  const handleToggleDone = async (id) => {
    try {
      await toggleDone(id);
      loadTodos();
    } catch {
      alert("Failed to toggle todo");
    }
  };

  const handleDelete = async (id) => {
    // if (!window.confirm("Are you sure?")) return;
    try {
      await deleteTodo(id);
      loadTodos();
    } catch {
      alert("Failed to delete todo");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "50px auto" }}>
      <h1>TODO App</h1>
      <TodoForm
        onSubmit={editingTodo ? handleUpdate : handleAdd}
        editingTodo={editingTodo}
        onCancel={() => setEditingTodo(null)}
      />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggleDone={handleToggleDone}
          onEdit={setEditingTodo}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;
