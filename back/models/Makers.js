const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const makerSchema = new Schema({
    named:String,
 // name: {type: Schema.Types.ObjectId, ref: 'User'},
  orientation: String
  //assigned_proyects:[ {type: Schema.Types.ObjectId, ref: 'Project'}]
  //video:link
//   owner: {type: Schema.Types.ObjectId, ref: 'User'}
  // owner will be added later on
  
});

const Maker = mongoose.model('Maker', makerSchema);

module.exports = Maker;