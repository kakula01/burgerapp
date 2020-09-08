import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://crossorigin.me/https://react-burger-e0c6c.firebaseio.com/'
})

export default instance