const Router = require('express').Router
const server = require('../services/express');
const Controllers = require('../controllers')
// const middlewares = require('./middlewares')

const router = new Router()


// ------------ guest routes -------------------------
router.post('/api/send_request', Controllers.Sms.sendRequest)
router.post('/api/send_location', Controllers.Sms.sendLocation )
router.post('/api/send_share_request', Controllers.Sms.sendShareRequest )
router.post('/api/send_contact_us', Controllers.Sms.sendContactUs);
module.exports = router
