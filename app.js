//Requiring needed modules (express, body-parser)
const express = require('express');
const bodyParser = require('body-parser');

//Creating the app
const app = express();

//Adding body parser in order to be able to pass data in requests
app.use(bodyParser.urlencoded({extended: false}));

//Accessing the static server in order to serve images, css, and client-side js
app.use('/static', express.static('public'));

//Selecting the projects from the data file
const data = require('./data.json');
const projects = data.projects;

//Setting pug as the view engine
app.set('view-engine', 'pug');

const projectRouter = require('./routes/projects.js');
const mainRouter = require('./routes');

app.use(mainRouter);
app.use(projectRouter); 


//Starting the app on port 3000
app.listen(3000, () => {
    console.log('App listening on port 3000');
});