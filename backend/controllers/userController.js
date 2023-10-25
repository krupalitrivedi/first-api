const express = require('express');
const UserToBeUsed = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const mongoose = require('mongoose'); 

const getUser = asyncHandler(async (req, res) => {
    const user = await UserToBeUsed.find();
    res.status(200).json(user)
});

const setUser = asyncHandler(async(req, res) => {
    if(!req.body.id){
        res.status(400);
        throw new Error('Please add id');
    }
    const user = await UserToBeUsed.create({
        id: req.body.id,
    });
    res.status(200).json({message: `Set User ${req.params.id}`})
});

const updateUser = asyncHandler(async(req,res) => {
    const user = await UserToBeUsed.findById(req.params.id);

    if(!user){
        res.status(400);
        throw new Error('User not found');
    }
    
    const updatedUser = await UserToBeUsed.findByIdAndUpdate(req.params.id, req.body, {new: true,});

    res.status(200).json(updatedUser);
});

const deleteUser = asyncHandler(async(req, res) => {
    const user1 = await UserToBeUsed.findById(req.params.id);
    console.log('User', user1)

    if(!user1){
        res.status(400);
        throw new Error("User not found");
    }
    await user1.remove();

    res.status(200).json({id: req.params.id});
});

module.exports = {
    getUser,
    setUser,
    updateUser,
    deleteUser
}