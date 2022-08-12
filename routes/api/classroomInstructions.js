const express = require('express');
const router = express.Router();
const classroomInstructionsCtrl = require('../../controllers/api/classroomInstructions')


//GET /api/classroomInstructions
router.post('/create', classroomInstructionsCtrl.create)
router.get('/posts', classroomInstructionsCtrl.index )

module.exports = router;