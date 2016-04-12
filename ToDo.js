var mongoose = require('mongoose');
var Schema  = mongoose.Schema;
var ToDoScheam = new Schema({
	text:String
 

});
var ToDo = mongoose.model('ToDo',ToDoScheam);
module.exports = ToDo;
