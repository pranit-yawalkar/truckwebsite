const express = require('express');
const Details = require("../models/Details");
const Slider = require('../models/Slider');

const routes = express.Router();

routes.get("/", async (req, res) => {
    const details = await Details.findOne({"_id": "63a9c7a862282a94e5f42e9a"});
    const slides = await Slider.find();

    // console.log(details);
    // console.log(slides);
    res.render("index", {
        details: details,
        slides: slides
    });
});

routes.get("/gallery", async (req, res) => {
    const details = await Details.findOne({"_id": "63a9c7a862282a94e5f42e9a"});
    res.render("gallery", {
        details: details
    });
})


module.exports = routes;