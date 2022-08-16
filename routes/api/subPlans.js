const express = require('express');
const router = express.Router();
const subPlansCtrl = require('../../controllers/api/subPlans')


//GET /api/subPlans
router.get('/', subPlansCtrl.index )
router.post('/create', subPlansCtrl.create)
router.get('/:id', subPlansCtrl.show)
router.delete('/:id', subPlansCtrl.delete)
module.exports = router