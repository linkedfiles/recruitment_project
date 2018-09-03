import axios from "axios"

export function fetchData() {
    return axios.post("http://localhost:3001/api/v1/users/login")
}