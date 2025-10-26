import { completeTask } from "../services/taskService";

export default function TaskItem({ task, onTaskUpdated }) {
  const handleComplete = async () => {
    const confirmAction = window.confirm(
      "Are you sure you want to mark this task as done?"
    );
    if (!confirmAction) return;

    await completeTask(task.id);
    onTaskUpdated();
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      {!task.completed && (
        <button onClick={handleComplete}>Done</button>
      )}
    </div>
  );
}


