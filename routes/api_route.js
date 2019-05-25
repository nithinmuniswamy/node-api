const express = require('express');
const router = express.Router();
const postcontroller = require('../controller/post_controller');

router.post('/add-post', postcontroller.addPost);

router.get('/posts', postcontroller.showPost);

router.get('/post/:id', postcontroller.singlePost);

router.patch('/post-update', postcontroller.updatePost);

router.delete('/remove-post/:id', postcontroller.deletePost);

module.exports = router;