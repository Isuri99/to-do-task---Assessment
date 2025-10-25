// import {completeTask} from "../services/taskService";

// export default function TaskItem({task, onTaskUpdated}) {
//     const handleComplete = async () => {
//         await completeTask(task.id);
//         onTaskUpdated();
//     };

//     return (
//         <div className={`task-item ${task.completed ? "completed" : ""}`}>
//             <h3>{task.title}</h3>
//             <p>{task.description}</p>
//             {!task.completed && (
//                 <button onClick={handleComplete}>Done</button>
//             )}
//         </div>
//     );
// }

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

// import Swal from "sweetalert2";
// import { completeTask } from "../services/taskService";

// export default function TaskItem({ task, onTaskUpdated }) {
//   const handleComplete = async () => {
//     const result = await Swal.fire({
//       title: "Are you sure?",
//       text: "You want to mark this task as done?",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes",
//       cancelButtonText: "No",
//       width: 300
//     });

//     if (result.isConfirmed) {
//       await completeTask(task.id);
//       onTaskUpdated();
//       Swal.fire("Done!", "The task has been removed.", "success");
//     }
//   };

//   return (
//     <div className={`task-item ${task.completed ? "completed" : ""}`}>
//       <h3>{task.title}</h3>
//       <p>{task.description}</p>
//       {!task.completed && <button onClick={handleComplete}>Done</button>}
//     </div>
//   );
// }

