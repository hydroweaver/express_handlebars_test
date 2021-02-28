//file created to show there can be several members

const express = require('express')
const router = express.Router()

router.get('/members/:memberId', function(req, res) {
    res.send('Members Value sent is ' + req.params.memberId)
})

module.exports = router;