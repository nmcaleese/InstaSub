const express = require('express');
const router = express.Router();
const classroomInstructionsCtrl = require('../../controllers/api/classroomInstructions')


//GET /api/classroomInstructions
router.get('/', classroomInstructionsCtrl.index )
router.post('/create', classroomInstructionsCtrl.create)

router.get('/:id', classroomInstructionsCtrl.show)

module.exports = router;