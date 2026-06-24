export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>TaskFlow App</h1>

      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        style={{ padding: "8px", marginBottom: "10px" }}
      />
      <br />
      <button>Login</button>

      <hr style={{ margin: "20px 0" }} />

      <h2>Tasks</h2>

      <input
        type="text"
        placeholder="Enter a task"
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button>Add Task</button>

      <ul>
        <li>Complete Day 2 Project</li>
        <li>Deploy to Vercel</li>
      </ul>
    </main>
  );
}