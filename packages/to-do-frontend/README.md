# To-Do Task Frontend

This is the **React** frontend for the To-Do Task application.  
It provides the user interface to create, view, and complete tasks.

---

## Tech Stack
- React
- Yarn
- Axios
- CSS
- Nginx (for Docker deployment)

---

## Environment Variables

The frontend connects to the backend using the following environment variable:
    ```REACT_APP_Todo_Server_Base_URL=http://localhost:8081``` 
      

If you are running the app manually, create a `.env` file in this folder with that value.

---

## Running Locally

### 1.Install dependencies
```yarn install```

### 2.Start the development server
```yarn start```

Visit http://localhost:3000

### Run unit tests using
```yarn test```

### The frontend is built and served through Nginx inside a Docker container

To run it with the full stack, execute:
```docker compose up --build```

Then open:
http://localhost:3000
