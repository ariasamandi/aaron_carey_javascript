const mongoose = require('mongoose');
const express = require('express');
const path = require('path')
const app = express();
module.exports = {
    index: (req, res)=>{
        res.sendFile(path.join(__dirname + './../../index.html'))
    },
    concerts: (req, res)=>{
        res.sendFile(path.join(__dirname+ './../../concerts.html'))
    }
}