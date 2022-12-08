import axios from 'axios'
import { MAIN_URL } from './Url'
export function addUser(formData){
    console.log(formData);
    return axios.post(`${MAIN_URL}adduser`,formData);
}
