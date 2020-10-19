const express = require('express')
const router = express.Router()

// Add your assets here
router.get('/asset-1', function (req, res) {
  res.render('assets/asset-1')
})
router.get('/fis-152-draft', function (req, res) {
  res.render('assets/fis-152-draft')
})
router.get('/fis-155-draft', function (req, res) {
  res.render('assets/fis-155-draft')
})
router.get('/fis-208-draft', function (req, res) {
  res.render('assets/fis-208-draft')
})
router.get('/asset-5', function (req, res) {
  res.render('assets/asset-5')
})
router.get('/asset-5b', function (req, res) {
  res.render('assets/asset-5b')
})
router.get('/asset-5c', function (req, res) {
  res.render('assets/asset-5c')
})
router.get('/asset-5d', function (req, res) {
  res.render('assets/asset-5d')
})
router.get('/asset-5e', function (req, res) {
  res.render('assets/asset-5e')
})
router.get('/asset-5f', function (req, res) {
  res.render('assets/asset-5f')
})
router.get('/asset-6', function (req, res) {
  res.render('assets/asset-6')
})
router.get('/asset-6b', function (req, res) {
  res.render('assets/asset-6b')
})
router.get('/fis-279-alert-inactive-draft', function (req, res) {
  res.render('assets/fis-279-alert-inactive-draft')
})
router.get('/fis-279-alert-active-draft', function (req, res) {
  res.render('assets/fis-279-alert-active-draft')
})
router.get('/fis-279-warning-inactive-draft', function (req, res) {
  res.render('assets/fis-279-warning-inactive-draft')
})
router.get('/fis-279-warning-active-draft', function (req, res) {
  res.render('assets/fis-279-warning-active-draft')
})
router.get('/fis-279-severe-draft', function (req, res) {
  res.render('assets/fis-279-severe-draft')
})
router.get('/fis-279-removed-draft', function (req, res) {
  res.render('assets/fis-279-removed-draft')
})
router.get('/fis-366-page-1-v1', function (req, res) {
  res.render('assets/fis-366-page-1-v1')
})
router.get('/fis-366-page-2-v1', function (req, res) {
  res.render('assets/fis-366-page-2-v1')
})
router.get('/fis-366-page-3-v1', function (req, res) {
  res.render('assets/fis-366-page-3-v1')
})
router.get('/fis-366-page-4-v1', function (req, res) {
  res.render('assets/fis-366-page-4-v1')
})
router.get('/fis-366-page-5-v1', function (req, res) {
  res.render('assets/fis-366-page-5-v1')
})
router.get('/fis-366-page-6-v1', function (req, res) {
  res.render('assets/fis-366-page-6-v1')
})
router.get('/fis-366-page-7-v1', function (req, res) {
  res.render('assets/fis-366-page-7-v1')
})
router.get('/fis-366-page-8-draft', function (req, res) {
  res.render('assets/fis-366-page-8-draft')
})
router.get('/fis-373-draft', function (req, res) {
  res.render('assets/fis-373-draft')
})
router.get('/fis-375-draft', function (req, res) {
  res.render('assets/fis-375-draft')
})
router.get('/fis-387-draft', function (req, res) {
  res.render('assets/fis-387-draft')
})
router.get('/fis-410-draft', function (req, res) {
  res.render('assets/fis-410-draft')
})
router.get('/fis-459-v1', function (req, res) {
  res.render('assets/fis-459-v1')
})
router.get('/asset-14', function (req, res) {
  res.render('assets/asset-14')
})
router.get('/asset-15', function (req, res) {
  res.render('assets/asset-15')
})
router.get('/asset-16', function (req, res) {
  res.render('assets/asset-16')
})
router.get('/asset-16b', function (req, res) {
  res.render('assets/asset-16b')
})
router.get('/asset-17', function (req, res) {
  res.render('assets/asset-17')
})
router.get('/icons', function (req, res) {
  res.render('assets/icons')
})

module.exports = router
