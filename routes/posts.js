const express = require('express')
const router = express.Router();
const Post = require('../models/Post')

//Get all posts
router.get('/', async (req,res)=>{
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        res.json({message:error})       
    }
})

//Submit a Post
router.post('/', async (req,res)=>{
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    })

    try {
        const savePost = await post.save();
        res.json(savePost);
    } catch (error) {
        res.json({message:error})
    }
     
})

//Get Specific post

router.get('/:postId', async (req,res)=>{
    try {
        const post = await Post.findById(req.params.postId)
        res.json(post)
    } catch (error) {
        res.json({message:error})      
    }
})



//Delete Specific post
router.delete('/:postId', async (req,res)=>{
    try {
        const removedPost =await Post.remove({_id:req.params.postId})
        res.json(removedPost)
    } catch (error) {
        res.json({message:error})      
    }
})

//Update Specific post
router.patch('/:postId', async (req,res)=>{
    try {
        const updatedPost =await Post.findByIdAndUpdate({_id:req.params.postId}, 
            { $set : { title: req.body.title,
                        description: req.body.description}
            })
        res.json(updatedPost)
    } catch (error) {
        res.json({message:error})      
    }
})

module.exports = router;