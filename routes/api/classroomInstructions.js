const express = require('express');
const router = express.Router();
const classroomInstructionsCtrl = require('../../controllers/api/classroomInstructions')


//GET /api/classroomInstructions
router.post('/create', classroomInstructionsCtrl.create)

module.exports = router;