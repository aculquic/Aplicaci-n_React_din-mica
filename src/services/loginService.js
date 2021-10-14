import axios from 'axios';

const http = axios.create({
    baseURL: " https://three-points.herokuapp.com/api",
    withCredentials: true
})
http.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if(error?.response.status === 401){
            window.location.replace('/login')
        }
    }
)

export const login = (username,password) => http.post('/login',{username,password})
export const getPosts = () => http.get('/posts')
export const getProfile = (id) => http.get('/users/'+ id)
