import axios from "axios";

const API_URL = "http://localhost:3000/api/todos";

export const fetchTodos = () => axios.get(API_URL);
export const createTodo = (todo) => axios.post(API_URL, todo);
export const updateTodo = (id, todo) => axios.put(`${API_URL}/${id}`, todo);
export const toggleDone = (id) => axios.patch(`${API_URL}/${id}/done`);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
