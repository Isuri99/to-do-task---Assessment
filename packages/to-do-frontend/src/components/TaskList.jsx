import TaskItem from "./TaskItem";


export default function TaskList({ tasks, onTaskUpdated }){
    return(
        <>
        <div className="task-list">
            {tasks.map((task,index) => (
                <TaskItem key={task.id} task={task} onTaskUpdated={onTaskUpdated}/>
            ))}
        </div>
        
         </>
    )
}