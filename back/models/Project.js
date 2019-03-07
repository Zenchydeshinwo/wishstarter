const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  description: String,
  //video:link
  tasks: [{type: Schema.Types.ObjectId, ref: 'Task'}],
  owner: {type: Schema.Types.ObjectId, ref: 'User'}
  // owner will be added later on
  
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;