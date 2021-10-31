import axios from "axios";
import moment from "moment";
const apiUrl = "http://localhost:8080/api/tasks";

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function searchTask(search) {
    return axios.get(apiUrl + '/search?q='+ search.search);
}

export function updateTask(id, req) {
    const task = {...req, dataConclusao: moment().format(), arquivado: req.completed}
    return axios.put(apiUrl + "/" + id, task);
}

export function deleteTask(id) {
    return axios.delete(apiUrl + "/" + id);
}
