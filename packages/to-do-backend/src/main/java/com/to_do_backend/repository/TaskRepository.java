package com.to_do_backend.repository;

import com.to_do_backend.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface TaskRepository extends JpaRepository <Task, Long> {
    // @Query( "SELECT t FROM Task t WHERE t.completed = false ORDER BY t.createdAt DESC LIMIT 5" )
    List<Task> findByCompletedFalseOrderByCreatedAtDesc();

    
} 