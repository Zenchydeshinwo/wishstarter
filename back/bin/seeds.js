
const mongoose = require('mongoose');
const projectSchema = require('../models/Project');

mongoose
  .connect('mongodb://localhost/back', { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

const projects = [
  {
    title: 'popo',
    description: 'Desc1',
    //tasks: ['tres'],
    owner: '5c7e5689f3c98f3743eda47e'
    
  }  ,
  {
    title: 'cucu',
    description: 'Desc2',
    //tasks: ['tres'],
    owner: '5c7eadf7eb396a59c7ba1df4'
  },
  {
    title: 'bubu',
      description: 'Desc3',
      //tasks: ['cinco'],
      owner: '5c7eb55aeb396a59c7ba1df5'
  }
];

projectSchema
  .insertMany(projects)
  .then(() => {
    console.log('Import Sucessful');
    mongoose
      .disconnect()
      .then(() => {
        console.log(`Discconected to Mongo!`);
      })
      .catch(err => {
        console.error('Error disconnecting to mongo', err);
      });
  })
  .catch(err => console.log('An error has ocurred: ', err));




// require('dotenv').config();
// const mongoose = require("mongoose");
// const Report = require("../models/reports");

// mongoose.connect();

// const reports = [
//   {
   

      // title: Proy1,
      // description: Desc1,
      // tasks: [uno,dos],
      // owner: Dreamer1
//   },

//   {
    

    // title: Proy2,
    // description: Desc2,
    // tasks: [tres,cuatro],
    // owner: Dreamer2
//   },

//   {
   

    // title: Proy3,
    //   description: Desc3,
    //   tasks: [cinco,seis],
    //   owner: Dreamer3
// ];

// Report.create(reports, err => {
//   if (err) {
//     throw err;
//   }
//   console.log(`Created ${reports.length} reports`);
//   mongoose.connection.close();
// });




// // Seeds file that remove all users and create 2 new users

// // To execute this seed, run from the root of the project
// // $ node bin/seeds.js

// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const User = require("../models/User");

// const bcryptSalt = 10;

// mongoose
//   .connect('mongodb://localhost/back', {useNewUrlParser: true})
//   .then(x => {
//     console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err)
//   });

// let users = [
//   {
//     username: "alice",
//     password: bcrypt.hashSync("alice", bcrypt.genSaltSync(bcryptSalt)),
//   },
//   {
//     username: "bob",
//     password: bcrypt.hashSync("bob", bcrypt.genSaltSync(bcryptSalt)),
//   }
// ]

// User.deleteMany()
// .then(() => {
//   return User.create(users)
// })
// .then(usersCreated => {
//   console.log(`${usersCreated.length} users created with the following id:`);
//   console.log(usersCreated.map(u => u._id));
// })
// .then(() => {
//   // Close properly the connection to Mongoose
//   mongoose.disconnect()
// })
// .catch(err => {
//   mongoose.disconnect()
//   throw err
// })