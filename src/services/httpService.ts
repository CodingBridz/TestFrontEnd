import axios from 'axios';

axios.defaults.baseURL = "https://www.dnd5eapi.co/api"

const methods = {
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete
}
export default methods;