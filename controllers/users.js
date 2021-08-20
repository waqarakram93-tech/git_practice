import User from '../models/User.js'

import asyncHandler from '../middlewares/asyncHandler.js'
import ErrorResponse from '../utils/ErrorResponse.js'


export const getAllUser = asyncHandler(async (req, res) => {

    const users = await User.find().populate('post');

    res.status(201).json(users);

})

export const getSingleUser = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id).populate('post');
    if (!user) throw new ErrorResponse(`User with id of ${id} not found`, 404);
    res.status(200).json(user);

})

export const createUser = asyncHandler(async (req, res) => {

    const { name, email } = req.body;
    if (!name || !email)
        throw new ErrorResponse('All fields are required', 400);
    const newUser = await User.create({ name, email })
    const newUserPost = await newUser.populate("post").execPopulate()
    res.status(201).json(newUserPost);

})
