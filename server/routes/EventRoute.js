const express = require('express');
const app = express();
const EventRoute = express.Router();
const util = require('util');
// Require Event model in our routes module
let Event = require('../models/Event');

// C: Defined store route
EventRoute.route('/create').post(function (req, res) {
  let event = new Event(req.body);
  event.save()
    .then(event => {
        res.status(200).json(event);
    })
    .catch(err => {
        res.status(400).send("unable to save to database");
    });
});

// R: Defined get data(index or listing) route
EventRoute.route('/').get(function (req, res) {
    Event.find(function (err, events){
        if(err) console.log(err);
        else res.json(events);
    });
});

// U: Update route
EventRoute.route('/update/:id').put(function (req, res) {
    let event = new Event(req.body);
    console.log(util.inspect(req.body, false, null, true));
    Event.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, event){
        if (err) res.json(err);
        else res.json(req.params.id);
    });
});


// D: Defined delete | remove | destroy route
EventRoute.route('/delete/:id').get(function (req, res) {
    Event.findByIdAndRemove({_id: req.params.id}, function(err, event){
        if(err) res.json(err);
        else res.json(req.params.id);
    });
});

module.exports = EventRoute;
