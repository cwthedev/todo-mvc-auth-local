const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const adminController = require('../controllers/admin')
const applyController = require('../controllers/apply')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndex)
router.get('/adminpanel', adminController.getAdminPanel)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.get('/apply', applyController.getApply)
router.post('/updateManager', applyController.updateManager)

module.exports = router