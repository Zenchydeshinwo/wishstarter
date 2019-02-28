import axios from 'axios';
require('dotenv').config();

export default class AuthService {
  constructor() {
    let service = axios.create({
      baseURL: `${process.env.API_URL}`,
      withCredentials: true
    })
    this.service = service;
  }

  signup = (username, password, email, birthdate) => {
    return this.service.post('/signup', { username, password, email, birthdate })
      .then(userInfo => userInfo.data)
      .catch(err => console.log(err))
  }

  login = (username, password) => {
    return this.service.post('/login', { username, password })
      .then(userInfo => userInfo.data)
      .catch(err => console.log(err))
  }

  logout = () => {
    return this.service.post('/logout', {})
      .then(userInfo => userInfo.data)
      .catch(err => console.log(err))
  }

  loggedin = () => {
    return this.service.get('/loggedin')
      .then(userInfo => userInfo.data)
      .catch(err => console.log(err))
  }
}