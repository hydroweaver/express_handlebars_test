//file created to show there can be several tutotials

const express = require('express')
const router = express.Router()

router.get('/tutorials/:tutorialId', function(req, res) {
    res.send('Tutorials Value sent is ' + req.params.tutorialId)
})

module.exports = router;