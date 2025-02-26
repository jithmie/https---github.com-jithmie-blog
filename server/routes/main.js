const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// import 'boxicons';


/**
 * GET /
 * HOME
 */
router.get('',(req, res) => {
    //below code line uses for checking purpose
    //res.send("Hello World");

    const locals = {
        title: "Node Blog",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
    }

    res.render('index', locals);
});

function insertPostData(){
    Post.insertMany([
        {
            
        }
    ])
}


router.get('/about',(req, res) => {
    res.render('about');
});

module.exports = router;