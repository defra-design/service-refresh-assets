const express = require('express')
const router = express.Router()

// Add your assets here
router.get('/fis-xxx-v1', function (req, res) {
  res.render('assets/fis-xxx-v1')
})

module.exports = router
