import axios from "axios";
 
const api = axios.create({
    baseURL: "https://dlfviagens.herokuapp.com/"
})
export default api