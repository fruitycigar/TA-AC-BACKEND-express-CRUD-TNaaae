// requisitions
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema; //check here for error as well

// the actual user schema
var userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: Number,
    address: String,
    bio: String,
    hobbies: String,
}, { timestamps: true });

// defining the model
var User = mongoose.model('User', userSchema);

// exporting
module.exports = User;