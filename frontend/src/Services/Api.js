import axios from 'axios';

// const API = axios.create({baseURL:'mern-note-keeper.vercel.app'});
const API = axios.create({baseURL:'https://mern-notekeeper-5at7.onrender.com'});

API.interceptors.request.use((req) => {
    const token = localStorage.getItem('token');
    if(token){
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export const registerUser = (data) => API.post('/auth/register',data);
export const loginUser = (data) => API.post('/auth/login',data);
export const fetchNote = () => API.get('/note');
export const createNote = (data) => API.post('/note',data);
export const updateNote = (id,data) => API.put(`/note/${id}`,data);
export const deleteNote = (id) => API.delete(`/note/${id}`);