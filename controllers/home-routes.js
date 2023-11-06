const router = require('express').Router();
const {User, Project }= require('../models');

router.get('/', async (req, res)=> {
    const dbProjects= await Project.findAll();
    const projects = dbProjects.map((project) => project.get({plain: true}));
    res.render('homepage', {projects} );
});


router.get('/login', (req,res)=>{
res.render('login');
})

router.get('/profile', async (req,res)=>{
    const profileData= await Project.findAll({
        where: {
            user_id: req.session.user_id,
        }
    })
    const profile = profileData.map((profile)=> profile.get({plain:true}));
    res.render('profile',{profile})
})

router.get('*',async (req, res)=> {
    const dbProjects= await Project.findAll();
    const projects = dbProjects.map((project) => project.get({plain: true}));
    res.render('homepage', {projects} );
})
module.exports = router;