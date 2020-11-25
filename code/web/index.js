const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require("path");
const config = require('config');
const userRoutes = require('./server/routes/user');
const projectRoutes = require('./server/routes/project');
const userStoryRoutes = require('./server/routes/userStory');
const database = require("./server/Database");

database.init();

if(!config.has("server")) {
  throw("Please fill the server configs!");
}


let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/template'));
app.use(express.static(path.join(__dirname , '/data')));

app.use('/', userRoutes);

app.use('/user', userRoutes);
app.use('/project', projectRoutes);
app.use('/us', userStoryRoutes);

app.listen(config.get("server.port"), function () {
    console.log("CDP app listening on port "+config.get("server.port")+"!");
})