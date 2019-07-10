const mongoose = require('mongoose');
const Item = require('../models/Item');

//Handle the incoming get request for '/' of api/items
function index(req,res) {
    Item.find()
    .then(items => res.json(items))
};

//Handle the incoming get request for '/:id' of api/items
function add(req,res) {
    
    const newPost = new Item({
        name: req.body.name        
    });
    newPost.save().then(item => res.json(item))
};

function update(req,res) {
    Item.findById(req.params.id).then((Item) => {
        Item.name = req.body.name;
        Item.save().then(item => res.json(item))
        .catch(err => res.status(404).json({success: false}));
    });
}

function destroy(req,res) {
    Item.findById(req.params.id).then((Item) => Item.remove()
        .then(item => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
}

module.exports = {
    index:index,
    add:add,
    update:update,
    destroy:destroy
};