import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const addTodo = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = task;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, task]);
    }

    setTask("");
  };

  const editTodo = (index) => {
    setTask(todos[index]);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f7fc",
        padding: "40px",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "#4f46e5",
          color: "white",
          padding: "25px",
          borderRadius: "20px",
          marginBottom: "30px",
        }}
      >
        <h1>TaskFlow Dashboard</h1>
        <p>Welcome, {user}</p>

        {/* ✅ LOGOUT BUTTON ADDED HERE */}
        <button
          onClick={logout}
          style={{
            marginTop: "15px",
            padding: "10px 15px",
            border: "none",
            borderRadius: "8px",
            background: "white",
            color: "#4f46e5",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Logout
        </button>
      </div>

      {/* MAIN CARD */}
      <div
        style={{
          background: "white",
          padding: "25px",
          borderRadius: "20px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h2>Total Tasks: {todos.length}</h2>

        <input
          type="text"
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            width: "70%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ddd",
            marginRight: "10px",
          }}
        />

        <button
          onClick={addTodo}
          style={{
            padding: "12px 20px",
            border: "none",
            borderRadius: "10px",
            background: "#4f46e5",
            color: "white",
            cursor: "pointer",
          }}
        >
          {editIndex !== null ? "Update Task" : "Add Task"}
        </button>

        {/* TODO LIST */}
        <div style={{ marginTop: "25px" }}>
          {todos.map((todo, index) => (
            <div
              key={index}
              style={{
                background: "#f8fafc",
                padding: "15px",
                borderRadius: "12px",
                marginBottom: "12px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{todo}</span>

              <div>
                <button
                  onClick={() => editTodo(index)}
                  style={{
                    marginRight: "10px",
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#f59e0b",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Edit
                </button>

                <button
                  onClick={() => deleteTodo(index)}
                  style={{
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "8px",
                    background: "#ef4444",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;