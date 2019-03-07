const express = require('express');
const router  = express.Router();

//RUTAS DE LOS PROYECTOS

const mongoose = require('mongoose');

const Project = require('../models/Project');


// POST route => to create a new project
router.post('/projects', (req, res, next)=>{
 
  Project.create({
    title: req.body.title,
    description: req.body.description,
    video:req.body.video,
    tasks: [],
    owner: req.user._id 
  })
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res.json(err);
    })
});
//.populate('tasks')
router.get('/projects', (req, res, next) => {
  console.log('ROBEEEr')
  Project.find()
    .then(allTheProjects => {
      console.log(allTheProjects)
      res.json(allTheProjects);
    })
    .catch(err => {
      res.json(err);
    })
});

// GET route => to get a specific project/detailed view
router.get('/project/:id', (req, res, next)=>{
  console.log('EL NUMERO HA LLEGADO')
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  // our projects have array of tasks' ids and 
  // we can use .populate() method to get the whole task objects
  //           .populate('tasks')                       ^
  //                                   |
  //                                   |
  Project.findById(req.params.id)
    .then(response => {
      res.status(200).json(response);
    })
    .catch(err => {
      res.json(err);
    })
})

// PUT route => to update a specific project
router.put('/projects/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((proyect) => {
      res.json({ message: `Project with ${req.params.id} is updated successfully.` });
    })
    .catch(err => {
      res.json(err);
    })
})

// DELETE route => to delete a specific project
router.delete('/projects/:id', (req, res, next)=>{

  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Project.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: `Project with ${req.params.id} is removed successfully.` });
    })
    .catch( err => {
      res.json(err);
    })
})

module.exports = router;