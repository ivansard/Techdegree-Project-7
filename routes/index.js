const express = require('express');
const router = express.Router();

//Selecting the projects from the data file
const data = require('../data.json');
const projects = data.projects;

//Creating index route
router.get('/', (req, res, next) => {
    res.render('index.pug', {projects: projects});
})

//Creating about route
router.get('/about', (req, res, next) => {
    res.render('about.pug');
})

module.exports = router;