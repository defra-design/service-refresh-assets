const express = require('express')
const router = express.Router()

// Add your assets here
router.get('/fis-454-draft', function (req, res) {
  res.render('assets/fis-454-draft')
})

module.exports = router
