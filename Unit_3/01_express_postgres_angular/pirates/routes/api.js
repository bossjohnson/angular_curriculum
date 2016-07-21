var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

router.get('/pirates', function(req, res, next) {
    knex('pirates')
        .then((data) => {
            res.send(data);
        });
});

router.post('/pirates', function(req, res, next) {

    var name = req.body.name;
    var poison = req.body.poison;
    var accessory = req.body.accessory;
    var imageUrl = req.body.imageUrl;

    knex('pirates')
        .insert({
            name: name,
            poison: poison,
            accessory: accessory,
            image_url: imageUrl
        })
        .then((data) => {
            res.redirect('/');
        })
});

router.delete('/pirates/:id', function(req, res, next) {
    knex('pirates')
        .del()
        .where('id', req.params.id)
        .then((data) => {
            res.send(null);
        });
});

module.exports = router;
