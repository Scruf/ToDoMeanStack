var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    body_parser = require('body-parser'),
    ToDo = require('./ToDo'),
    method_override = require('method-override'),
    mongo_db_uri = "mongodb://ek5442:NokiaLumia920@ds033875.mlab.com:33875/movies";
mongoose.connect(mongo_db_uri);
var db = mongoose.connection;
//connect to a databse
db.on('error',console.error.bind(console, 'connection error:'));
//set static filies location
app.use(express.static(__dirname+'/public'));
//log every request with morgan
app.use(morgan('dev'));
app.use(body_parser.urlencoded({'extended':'true'}));
app.use(body_parser.json());
app.use(body_parser.json({type: 'application/vnd.api+json'}));
app.use(method_override());


app.listen(8000);
console.log("Application listening to port 8000");

app.get('/api/todos',function(req,res){
    ToDo.find(function(err,data){
          if (err)
            res.send(err);
          else {
            res.send(data);
          }
    });
});
app.post('/api/todos',function(req,res){
  ToDo.create({
    text: req.body.text,
    done: false
  }, function(err,data){
    if(err)
      throw err;
    ToDo.find(function(err,data){
      if(err)
        res.send(err);
      else {
          res.json(data);
      }
    });
  });
});
app.delete('/api/delete/:todo_id',function(req,res){
  ToDo.remove({
    _id: req.params.todo_id
  },function(err,data){
    if(err)
      res.send(err);
    ToDo.find(function(err,data){
      if(err)
        res.send(err);
      else {
          res.json(data);
      }
    });
  });
});
app.get('*',function(req,res){
  res.senfiles('./public/index.html');
});
