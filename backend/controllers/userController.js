const express = require('express');
const UserToBeUsed = require('../models/userModel')

const getUser = asyncHandler(async (req, res) => {
    res.status(200).json({message: "Get User"})
});

const setUser = asyncHandler(async(req, res) => {
    if(!req.body.id){
        res.status(400);
        throw new Error('Please add id');
    }
    const user = await UserToBeUsed.create({
        id: req.body.id,
    });
    res.status(200).json({message: 'Set User'})
});

const updateUser = asyncHandler(async(req,res) => {
    res.status(200).json({message: `Update user ${req.params.id}`})
});

const deleteUser = asyncHandler(async(req, res) => {
    res.status(200).json({message: `Delete user ${req.params.id}`})
});

module.exports = {
    getUser,
    setUser,
    updateUser,
    deleteUser
}