var mongoose = require('mongoose');
var Schema  = mongoose.Schema;
var chanelSchema = new Schema({
	name:String,

});
var ToDo = mongoose.model('ToDo',chanelSchema);
module.exports = ToDo;
