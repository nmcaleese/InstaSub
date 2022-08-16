const express = require('express');
const router = express.Router();
const subPlansCtrl = require('../../controllers/api/subPlans')


//GET /api/subPlans

router.post('/create', subPlansCtrl.create)

module.exports = router