const Shoe = require('../models/shoe');

const getAllShoes = async (req,res) => {
    try {
        const shoe = await Shoe.find({});
        res.status(201).json({shoe});
    } catch (err) {
        res.status(500).json({msg: err});
    }
};

const getShoe = async (req,res) => {
    try {
        const shoe = await Shoe.findById(req.params.id);
        res.status(201).json({shoe});
    } catch (err) {
        res.status(500).json({msg: err});
    }
};

const deleteShoe = async (req,res) => {
    try {
        const shoe = await Shoe.findByIdAndDelete(req.params.id);
        res.status(201).json({shoe});
    } catch (err) {
        res.status(500).json({msg: err});
    }
};

const updateShoe = async (req,res) => {
    try {
        const { name, price, featured, rating, createdAt, anime } = req.query;
        const shoe = await Shoe.findByIdAndUpdate(req.params.id, {name: name, price: price, featured: featured, rating: rating, createdAt: createdAt, anime: anime });
        res.status(201).json({shoe});
    } catch (err) {
        res.status(500).json({msg: err});
    }
};

const createShoe = async (req,res) => {
    try {
        console.log(req.query);
        const shoe = await Shoe.create(req.query);
        res.status(201).json({shoe});
    } catch (err) {
        res.status(500).json({msg: err});
    }
};

module.exports = {getAllShoes, getShoe, deleteShoe, updateShoe, createShoe};