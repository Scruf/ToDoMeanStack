var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ToDoSchema = new Schema ({
        text: String,
        done: Boolean
    });
    var ToDoList = mongoose.model('ToDos',ToDoSchema);
    module.exports = ToDoList;
