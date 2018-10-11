const express = require('express');
const router = express.Router();

//Selecting the projects from the data file
const data = require('../data.json');
const projects = data.projects;

router.get('/projects/:id', (req, res) => {
    //Submitting an id as a request parameter, which will allow acces to specific elements in the projects array
    let id = req.params.id;

    //Checking if the given parameter is a valid number, concerning our array of projects
    //If the parameter isn't valid, then we redirect to a random project
    if(isNaN(parseInt(id)) || id >= projects.length){
        id = Math.floor(Math.random() * projects.length);
        return res.redirect(`/projects/${id}`);
    }
    const project = projects[id];

    res.render('project.pug', {project: project});
})


module.exports = router;