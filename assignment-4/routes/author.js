const express = require('express');

const router = express.Router();

const logger = require('../logger')



router.get('/authors', logger, (req, res, next) => {
    res.send('This is the GET /authors endpoint')
})

router.post('/authors', logger, (req, res, next)=>{
    res.send('This is the POST /authors endpoint')
})

router.put('/authors', logger, (req, res, next)=>{
    res.send('This is the PUT /authors endpoint')
})

router.delete('/authors', logger,  (req, res, next)=>{
    res.send('This is the DELETE /authors endpoint')
})


module.exports = router;