const express = require('express');
const router = express.Router();
const classroomInstructionsCtrl = require('../../controllers/api/classroomInstructions')


//GET /api/classroomInstructions
router.get('/', classroomInstructionsCtrl.index )
router.post('/create', classroomInstructionsCtrl.create)
router.get('/:id', classroomInstructionsCtrl.show)
router.put('/:id', classroomInstructionsCtrl.update)
router.delete('/:id', classroomInstructionsCtrl.delete)
module.exports = router;