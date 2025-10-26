import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { getTasks } from "./services/taskService";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTasks();
    const sortedTasks = data.sort(
      (a,b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    const latestFive = sortedTasks.slice(0,5);

    setTasks(latestFive);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="app-container">
      <div className="form-section">
        <div className="form-header">
          <img src="/assets/app-logo.png" alt="App Logo" className="app-logo" />
          <h1 className="app-name">TaskMate</h1>
        </div>
        <div className="app-tagline">Organize your day the comfy way.....</div>
        <TaskForm onTaskAdded={fetchTasks} />
      </div>
      
      <div className="sticky-section">
       <TaskList tasks={tasks} onTaskUpdated={fetchTasks} />
        <img src="/assets/cactus.png" alt="cactus" className="cactus-img"/>
      </div> 
    </div>
  );
}

export default App;