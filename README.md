# to-do-task---Assessment

This is a full-stack To-Do Task management application built with **Spring Boot** (backend), **React** (frontend), and **MySQL** (database).  
The entire system is containerized using **Docker** for easy deployment and setup.

---

## Project Structure

to-do-task---Assessment/
├── packages/
│ ├── to-do-backend/ # Spring Boot backend
│ └── to-do-frontend/ # React frontend
├── .env.template # Template for environment variables
├── docker-compose.yml # Docker configuration file
└── README.md # Root documentation (this file)

---

## Configuration

The `.env.template` file serves as a template for configuring MySQL, Frontend, and Backend services.  
These environment variables are used inside the `docker-compose.yml` file to configure the entire To-Do Task application.

### Steps:
1. Open the `.env.template` file.
2. Fill in the missing values such as MySQL credentials and port numbers.
3. Save it as a new file named `.env` in the project root.

---

## Running the Application with Docker

### Step 1: Build the Docker images
       docker compose build

### Step 2: Start the containers
        docker compose up

This will start:
    MySQL on port 3307
    Backend on port 8081
    Frontend on port 3000

## Note
Sometimes the backend server may not start properly on the first attempt due to MySQL initialization delay.

If this happens:
    Run ```docker ps``` to confirm all containers are running.

If the backend isn’t running, restart it:
    ```docker compose restart backend```
    
Once all containers are running, visit:
    Frontend: http://localhost:3000
    Backend API: http://localhost:8081

### Stopping the Containers
    docker compose down

---

## Running Tests locally
    Frontend: yarn test
    Backend: mvn test

Make sure to navigate to the respective package folder before running the test commands


