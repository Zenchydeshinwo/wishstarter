const express = require('express');
const router  = express.Router();

//RUTAS DE LOS PROYECTOS

const mongoose = require('mongoose');

const Maker = require('../models/Makers');


// POST route => to create a new project
router.post('/makers', (req, res, next)=>{
 console.log('LLegamos!!!')
  Maker.create({
    named: req.body.named,
    orientation: req.body.orientation,
    // video:req.body.video,
    // tasks: [],
    // owner: req.user._id 
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});
//.populate('tasks')
router.get('/makers', (req, res, next) => {
  
  Maker.find()
    .then(allTheMakers => {
      // console.log(allTheProjects)
      res.json(allTheMakers);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET route => to get a specific project/detailed view
router.get('/makers/:id', (req, res, next)=>{
  
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  // our projects have array of tasks' ids and 
  // we can use .populate() method to get the whole task objects
  //           .populate('tasks')                       ^
  //                                   |
  //                                   |
  Maker.findById(req.params.id)
    .then(response => {
      
      res.status(200).json(response);
     
    })
    .catch(err => {
      res.json(err);
    })
})

// PUT route => to update a specific project
router.put('/makers/:id', (req, res, next)=>{
  console.log('Esto es lululul',req.params)
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Maker.findByIdAndUpdate(req.params.id,req.params,{new:true})
    .then((body) => {
      console.log('num ID',num)
      console.log('JSON de vuelta', res.json)
      console.log('Body',body)
      res.json(body);
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE route => to delete a specific project
// router.delete('/projects/:id', (req, res, next)=>{

//   if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
//     res.status(400).json({ message: 'Specified id is not valid' });
//     return;
//   }

//   Project.findByIdAndRemove(req.params.id)
//     .then(() => {
//       res.json({ message: `Project with ${req.params.id} is removed successfully.` });
//     })
//     .catch( err => {
//       res.json(err);
//     })
// })

module.exports = router;