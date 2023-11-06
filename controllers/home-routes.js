const router = require('express').Router();
const {User, Project }= require('../models');

router.get('/', async (req, res)=> {
    const dbProjects= await Project.findAll();
    const projects = dbProjects.map((project) => project.get({plain: true}));
    res.render('homepage', {projects} );
});

module.exports = router;