const express = require('express')
const router = express.Router()

// Add your assets here
router.get('/asset-1', function (req, res) {
  res.render('assets/asset-1')
})
router.get('/asset-2', function (req, res) {
  res.render('assets/asset-2')
})
router.get('/asset-3', function (req, res) {
  res.render('assets/asset-3')
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
router.get('/asset-7', function (req, res) {
  res.render('assets/asset-7')
})
router.get('/asset-7b', function (req, res) {
  res.render('assets/asset-7b')
})
router.get('/asset-7c', function (req, res) {
  res.render('assets/asset-7c')
})
router.get('/asset-7d', function (req, res) {
  res.render('assets/asset-7d')
})
router.get('/asset-7e', function (req, res) {
  res.render('assets/asset-7e')
})
router.get('/asset-7f', function (req, res) {
  res.render('assets/asset-7f')
})
router.get('/asset-8', function (req, res) {
  res.render('assets/asset-8')
})
router.get('/asset-8b', function (req, res) {
  res.render('assets/asset-8b')
})
router.get('/asset-8c', function (req, res) {
  res.render('assets/asset-8c')
})
router.get('/asset-8d', function (req, res) {
  res.render('assets/asset-8d')
})
router.get('/asset-8e', function (req, res) {
  res.render('assets/asset-8e')
})
router.get('/asset-8f', function (req, res) {
  res.render('assets/asset-8f')
})
router.get('/asset-8g', function (req, res) {
  res.render('assets/asset-8g')
})
router.get('/asset-8h', function (req, res) {
  res.render('assets/asset-8h')
})
router.get('/asset-9', function (req, res) {
  res.render('assets/asset-9')
})
router.get('/asset-10', function (req, res) {
  res.render('assets/asset-10')
})
router.get('/fis-387-draft', function (req, res) {
  res.render('assets/fis-387-draft')
})
router.get('/asset-11a', function (req, res) {
  res.render('assets/asset-11a')
})
router.get('/asset-11b', function (req, res) {
  res.render('assets/asset-11b')
})
router.get('/asset-11c', function (req, res) {
  res.render('assets/asset-11c')
})
router.get('/asset-11d', function (req, res) {
  res.render('assets/asset-11d')
})
router.get('/asset-11e', function (req, res) {
  res.render('assets/asset-11e')
})
router.get('/asset-11f', function (req, res) {
  res.render('assets/asset-11f')
})
router.get('/asset-11g', function (req, res) {
  res.render('assets/asset-11g')
})
router.get('/asset-12', function (req, res) {
  res.render('assets/asset-12')
})
router.get('/asset-14', function (req, res) {
  res.render('assets/asset-14')
})
router.get('/asset-14b', function (req, res) {
  res.render('assets/asset-14b')
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
router.get('/asset-18', function (req, res) {
  res.render('assets/asset-18')
})
router.get('/asset-19', function (req, res) {
  res.render('assets/asset-19')
})
router.get('/asset-20', function (req, res) {
  res.render('assets/asset-20')
})
router.get('/asset-20b', function (req, res) {
  res.render('assets/asset-20b')
})
router.get('/asset-21', function (req, res) {
  res.render('assets/asset-21')
})
router.get('/asset-22', function (req, res) {
  res.render('assets/asset-22')
})
router.get('/asset-23', function (req, res) {
  res.render('assets/asset-23')
})
router.get('/asset-24', function (req, res) {
  res.render('assets/asset-24')
})
router.get('/asset-25', function (req, res) {
  res.render('assets/asset-25')
})
router.get('/asset-26', function (req, res) {
  res.render('assets/asset-26')
})
router.get('/icons', function (req, res) {
  res.render('assets/icons')
})

// API routes
router.get('/api/warnings.geojson', (req, res) => {
  const warnings = require('./data/warnings-geojson.js')
  res.json(warnings)
})
router.get('/api/stations.geojson', (req, res) => {
  const stations = require('./data/stations-geojson.js')
  res.json(stations)
})
router.get('/api/rainfall.geojson', (req, res) => {
  const rainfall = require('./data/rainfall-geojson.js')
  res.json(rainfall)
})

module.exports = router
