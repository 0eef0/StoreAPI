const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    link: {
        type: String,
    },
    price: {
        type: Number,
    },
    featured: {
        type: Boolean,
    },
    rating: {
        type: Number,
    },
    createdAt: {
        type: Date,
    },
    anime: {
        type: String,
        enum: {
            values: ['Demon Slayer', 'My Hero Academia', "JoJo's Bizarre Adventure", 'Saiki K'],
            message: '{VALUE} is not supported'
        },
    }
});

module.exports = mongoose.model('Shoe', shoeSchema);