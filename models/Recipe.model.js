// Your code here ...

const mongoose = require("mongoose")

const artistSchema = new mongoose.Schema({
    title: String, 
    instructions: String,
    level: {
        type: String,
        enum: ["Easy Peasy" - "Amateur Chef" - "UltraPro Chef"]
    },
    ingredients: {
        type: [String],
    },
    image: {
        type: String,
        default: "https://images.media-allrecipes.com/images/75131.jpg"
    },
    duration: {
    type: Number,
    min: 0
    },
    isArchived: {
    type: Boolean,
    default: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});
