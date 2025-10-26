# To-Do Task Backend

This is the **Spring Boot** backend for the To-Do Task application.  
It exposes RESTful APIs to manage tasks and interacts with a MySQL database.

---

## Tech Stack
- Java 18
- Spring Boot
- Maven
- MySQL
- Docker

---

## API Endpoints

| Method | Endpoint                   | Description                 |
|--------|----------------------------|-----------------------------|
| GET    | /api/tasks                 | Retrieve all tasks          |
| POST   | /api/tasks                 | Create a new task           |
| PUT    | /api/tasks/{id}/complete   | Update a task (mark as done)|

---

## Environment Variables

The backend uses the following environment variables (set in `.env` or Docker):

```SERVER_PORT=8081```

```SPRING_DATASOURCE_URL=jdbc:mysql://todo-mysql:3306/todo_db```

```SPRING_DATASOURCE_USERNAME=root```

```SPRING_DATASOURCE_PASSWORD=yourpassword```

---

## Running Locally

### 1.Build the application
``` mvn clean package ```

### 2.Run the application
``` mvn spring-boot:run ```

The backend will run on http://localhost:8081

### Run backend unit tests using
``` mvn test ```

## Running in Docker
The backend is containerized using Docker and automatically starts with Docker Compose.
To start:
``` docker compose up --build ```

The API will be available at:
http://localhost:8081


## Note
Sometimes the backend server may not start properly on the first attempt due to MySQL initialization delay.

If this happens:
    Run ```docker ps``` to confirm all containers are running.

If the backend isn’t running, restart it:
    ```docker compose restart backend```

