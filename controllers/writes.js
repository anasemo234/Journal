const router = require('express').Router();
const express = require('express');
const Write = require('../models/write');

// === INDEX === //
router.get('/', (req, res) => {
    Write.find({}, (err, foundWrites) => {
        res.render('writes/index.ejs', {
            writes: foundWrites
        })
    })
})












// export router object
module.exports = router;

