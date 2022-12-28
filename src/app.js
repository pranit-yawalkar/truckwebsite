const express = require('express');
const routes = require("./routes/routes");
const hbs = require("hbs");
const mongoose = require("mongoose");
const Details = require("./models/Details");
const Slider = require("./models/Slider")

require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.use("", routes);
app.use("/static", express.static("public"));

app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Database connected");


    // Slider.create([
    //     {
    //         title: "Truck for everyone",
    //         subtitle: "To help people to transport their products.",
    //         imageUrl: "/static/images/slider1.jpg"
    //     },
    //     {
    //         title: "Trailers are also available",
    //         subtitle: "To help people to transport their products.",
    //         imageUrl: "/static/images/slider2.jpg"
    //     },
    //     {
    //         title: "Dumpers and pick ups are also available",
    //         subtitle: "To help people to transport their products.",
    //         imageUrl: "/static/images/slider3.jpg"
    //     }
    // ])

    // Details.create({
    //     brandName: "TruckBusWebsite",
    //     brandIcon: "public/images/logo.jpg",
    //     links: [
    //         {
    //             label: "Home",
    //             url: "/"
    //         },
    //         {
    //             label: "Services",
    //             url: "/services"
    //         },
    //         {
    //             label: "Gallery",
    //             url: "/gallery"
    //         },
    //         {
    //             label: "About",
    //             url: "/about"
    //         },
    //         {
    //             label: "Contact Us",
    //             url: "/contact"
    //         },
    //     ]
    // })
})

app.listen(3000, () => {
    console.log(`Server started on ${PORT}`)
})