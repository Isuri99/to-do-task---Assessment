package com.to_do_backend.service;

import com.to_do_backend.model.Task;
import com.to_do_backend.repository.TaskRepository;
import org.springframework.stereotype.Service;
import java.util.List;;


@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getLatestIncompleteTasks() {
        return taskRepository.findByCompletedFalseOrderByCreatedAtDesc();

    }

    public Task markAsDone(Long id) {
        Task task = taskRepository.findById(id)
        .orElseThrow(() -> new RuntimeException("Task not found"));
        task.setCompleted(true);
        return taskRepository.save(task);
    }
    
}
