const express = require('express')
const router = express.Router()

// Add your assets here
router.get('/fis-start-page-ideas', function (req, res) {
  res.render('assets/fis-start-page-ideas')
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
router.get('/fis-256-draft', function (req, res) {
  res.render('assets/fis-256-draft')
})
router.get('/fis-260-draft', function (req, res) {
  res.render('assets/fis-260-draft')
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
router.get('/fis-454-draft', function (req, res) {
  res.render('assets/fis-454-draft')
})
router.get('/fis-459-v1', function (req, res) {
  res.render('assets/fis-459-v1')
})

module.exports = router
