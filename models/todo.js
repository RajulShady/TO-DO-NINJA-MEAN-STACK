const mongoose = require('mongoose');
const config = require('../config/database');

// User Schema
const TaskSchema = mongoose.Schema({
  task: {
    type: String
  }
  
});

const Todo = module.exports = mongoose.model('Todo', TaskSchema);



module.exports.addTask = function(newTask, callback){
 newTask.save(callback);

}

