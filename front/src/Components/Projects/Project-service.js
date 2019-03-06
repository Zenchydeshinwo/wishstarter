import axios from 'axios';
require('dotenv').config();



//Lo que viene aquí de momento solo está puesto para que esto no casque, yyyy....... ALELUYAAAAAAAAAAAAAAAAA
//VAMOOOOOOOOOOOOOOOOOOOOOOOOOOSSSS!!!!!!!

export default class Projectservice {
    constructor() {
      let funAxios = axios.create({
        baseURL: `${process.env.REACT_APP_URL}/api`,
        withCredentials: true
      })
      this.funAxios = funAxios;
    }

    registerProject=(title,description)=>{
      return  this.funAxios.post('/projects', {title,description})
      .then(res=> {return res.data})
      .catch(err => console.log(err))
    }




}