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

    registerProject=(title,description,video)=>{
      return  this.funAxios.post('/projects', {title,description,video})
      .then(res=> {return res.data})
      .catch(err => console.log(err))
    }

    requestProject=()=>{
        return  this.funAxios.get('/projects')
        .then(res=> {
            return res.data})
        .catch(err => console.log(err))
      }

      getProj=(numberid)=>{
        console.log('Estamos en get Project')
        return this.funAxios.get('/project/'+numberid)
        .then(res=>{return res.data})
        .catch(err=> console.log(err))
      }

      superEditProject=(state,numid)=>{
        console.log('CHECK STATE llega a SuperEdit se envia al back',state)
        console.log('CHECK numid llega a SuperEdit se envia al back',numid)

        return this.funAxios.put('/projects/'+numid)
        .then(res=>{
          console.log('Json de vuelta al front', res.data)
          return res.data})
        .catch(err=> console.log(err))

      }

      // deleteProject=(numberid)=>{
      //   return this.funAxios.delete('/projects/'+numberid)
      //   .then(res=>{
      //     console.log('Eliminado', res.data)
      //     return res.data})
      //   .catch(err=> console.log(err))

      // }


}