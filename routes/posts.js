const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


// RETURN ALL THE POST
router.get('/', async (req,res)=>{
    
    try{
        const posts = await Post.find();
        res.json(posts);
    }catch(err){
        res.json({message:err});
    }

    });



    // SUBMITS ALL THE POST
router.post('/', async (req,res)=>{
const post = new Post({
    title:req.body.title,
    hotel:req.body.hotel,
    price:req.body.price,
    imgUrl:req.body.imgUrl
});


try{
const savedPost = await post.save()
res.json(savedPost);
}catch(err){
    res.json({message:err});
}
});    

//RETURN SPECIFIC POST
router.get('/:postId', async (req,res)=>{
try{
const post = await Post.findById(req.params.postId);
res.json(post);}
catch(err){
    res.json({messege:err});
}
});

//DELETING DATA 'SAD'
router.delete('/:postId', async (req,res) =>{
    try{
const removedPost = await Post.remove({_id:req.params.postId});
res.json({RemovedItem:removedPost});
    }catch(err){
res.json({messege:err});
    }
})

//UPDATING DATA (R U SURE!!!)
router.patch('/:postId', async (req,res) =>{
    try{
const updatePost = await Post.updateOne(
    {_id:req.params.postId},
    { $set: { title:req.body.title}});
    res.json({updatedItem:updatePost});
    }catch(err){
        res.json({messege:err})
    }
})



    module.exports = router;