import axios from 'axios';
require('dotenv').config();



//Lo que viene aquí de momento solo está puesto para que esto no casque, yyyy....... ALELUYAAAAAAAAAAAAAAAAA
//VAMOOOOOOOOOOOOOOOOOOOOOOOOOOSSSS!!!!!!!

export default class Makerservice {
    constructor() {
      let funAxios = axios.create({
        baseURL: `${process.env.REACT_APP_URL}/api`,
        withCredentials: true
      })
      this.funAxios = funAxios;
    }

    registerMaker=(named,orientation)=>{
        console.log('estamos en maker-service nemed',named)
      return  this.funAxios.post('/makers', {named,orientation})
      .then(res=> {return res.data})
      .catch(err => console.log(err))
    }

    requestMaker=()=>{
        return  this.funAxios.get('/makers')
        .then(res=> {
            return res.data})
        .catch(err => console.log(err))
      }

      getMak=(numberid)=>{
        return this.funAxios.get('/makers/'+numberid)
        .then(res=>{return res.data})
        .catch(err=> console.log(err))
      }

      superEditMaker=(state,numid)=>{
       
        return this.funAxios.put('/makers/'+numid)
        .then(res=>{
          console.log('Json de vuelta al front', res.data)
          return res.data})
        .catch(err=> console.log(err))

      }


}