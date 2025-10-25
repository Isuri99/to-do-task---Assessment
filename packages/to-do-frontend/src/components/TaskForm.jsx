import {useState} from "react";
import {createTask} from "../services/taskService";

export default function TaskForm({onTaskAdded}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title) return;
        await createTask({title, description});
        setTitle("");
        setDescription("");
        onTaskAdded();
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
            type="text"
            className="task-title-input"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            
            <textarea
            className="task-desc-input"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />

            <div className="button-container">
            <button type="submit">Add</button>
            </div>
        </form>
    );
}