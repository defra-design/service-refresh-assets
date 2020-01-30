const express = require('express')
const router = express.Router()

// Add your assets here
router.get('/FIS-XXX-v1', function (req, res) {
  res.render('assets/FIS-XXX-v1')
})

module.exports = router
