import axios from "axios";


// const API_URL = "http://localhost:8081/api/tasks";
const API_URL = process.env.REACT_APP_Todo_Server_Base_URL+"/api/tasks";



export const getTasks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const createTask = async (task) => {
    const response = await axios.post(API_URL, task);
    return response.data;
};

export const completeTask = async (id) => {
    const response = await axios.put(`${API_URL}/${id}/complete`);
    return response.data;
};