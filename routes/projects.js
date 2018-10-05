const express = require('express');
const router = express.Router();

//Selecting the projects from the data file
const data = require('../data.json');
const projects = data.projects;

router.get('/projects/:id', (req, res) => {
    //Submitting an id as a request parameter, which will allow acces to specific elements in the projects array
    const id = req.params.id;
    const project = projects[id];

    res.render('project.pug', {project: project});
})

module.exports = router;