const express = require("express");
const router = express.Router();
const lessonPlansCtrl = require("../../controllers/api/lessonPlans");

//GET /api/lessonPlans
router.get("/", lessonPlansCtrl.index);
router.post("/create", lessonPlansCtrl.create);
router.get("/:id", lessonPlansCtrl.show);
router.put("/:id", lessonPlansCtrl.update);
router.delete("/:id", lessonPlansCtrl.delete);
module.exports = router;
