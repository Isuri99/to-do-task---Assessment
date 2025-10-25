package com.to_do_backend.service;

import com.to_do_backend.model.Task;
import com.to_do_backend.repository.TaskRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class TaskServiceTest {

    @Mock
    private TaskRepository taskRepository;

    @InjectMocks
    private TaskService taskService;

    private Task task;

    @BeforeEach
    void setUp() {
        task = new Task(1L, "Test Task", "Description", false, LocalDateTime.now());
    }

    @Test
    void testCreateTask() {
        when(taskRepository.save(task)).thenReturn(task);

        Task saved = taskService.createTask(task);

        assertEquals("Test Task", saved.getTitle());
        verify(taskRepository, times(1)).save(task);
    }

    @Test
    void testGetLatestIncompleteTasks() {
        when(taskRepository.findByCompletedFalseOrderByCreatedAtDesc())
                .thenReturn(Arrays.asList(task));

        List<Task> tasks = taskService.getLatestIncompleteTasks();

        assertEquals(1, tasks.size());
        verify(taskRepository, times(1)).findByCompletedFalseOrderByCreatedAtDesc();
    }

    @Test
    void testMarkAsDone() {
        when(taskRepository.findById(1L)).thenReturn(Optional.of(task));
        when(taskRepository.save(any(Task.class))).thenAnswer(i -> i.getArguments()[0]);

        Task completedTask = taskService.markAsDone(1L);

        assertTrue(completedTask.isCompleted());
        verify(taskRepository).findById(1L);
        verify(taskRepository).save(task);
    }

    @Test
    void testMarkAsDone_TaskNotFound() {
        when(taskRepository.findById(1L)).thenReturn(Optional.empty());

        assertThrows(RuntimeException.class, () -> taskService.markAsDone(1L));
    }
}
