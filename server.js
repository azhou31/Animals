var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
mongoose.connect('mongodb://localhost/animals');

mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, "MongoDB connection error"));
let AnimalSchema = new mongoose.Schema({
    _id:Number,
    name:{type:String, required: true},
    strength:{type: Number, required: true}
}, {timestamps: true} );
let Animal = mongoose.model('Animal', AnimalSchema);


var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000,function(){
    console.log("Running on port 8000");
})