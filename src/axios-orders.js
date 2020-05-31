import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-md93.firebaseio.com/'
});

export default instance;