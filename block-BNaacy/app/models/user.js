// requisitions
var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// model
var userSchema = new Schema({
    name: {type: String, required: true },
    age: String,
    email: String
}, { timestamps: true });

// definition and export

var User = mongoose.model('User', userSchema);

module.exports = User;