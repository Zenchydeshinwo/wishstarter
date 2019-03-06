import axios from 'axios';
require('dotenv').config();



export default class AuthService {
  constructor() {
    let serviceAxios = axios.create({
      baseURL: `${process.env.REACT_APP_URL}/api`,
      withCredentials: true
    })
    this.serviceAxios = serviceAxios;
  }

  signup = (username, password) => {
    return this.serviceAxios.post('/signup', { username, password })
      .then(response => {return response.data})
      .catch(err => console.log(err))
  }

  login = (username, password) => {
    return this.serviceAxios.post('/login', { username, password })
      .then(response => {return response.data})
      .catch(err => console.log(err))
  }

  logout = () => {
    return this.serviceAxios.get('/logout', {})
      .then(response => response.data)
      .catch(err => console.log(err))
  }

  loggedin = () => {
    return this.serviceAxios.get('/loggedin')
      .then(response => {
        return response.data
      })
      .catch(err => {
        return null
      })
  }
  // nameProject = (username, password,) => {
  //   return this.serviceAxios.post('/newProject', { username, password })
  //     .then(response => {return response})
  //     .catch(err => console.log(err))
  
}