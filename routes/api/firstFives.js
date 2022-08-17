const express = require("express");
const router = express.Router();
const firstFivesCtrl = require("../../controllers/api/firstFives");

//GET /api/firstFives
router.get("/", firstFivesCtrl.index);
router.post("/create", firstFivesCtrl.create);
router.get("/:id", firstFivesCtrl.show);
router.put("/:id", firstFivesCtrl.update);
router.delete("/:id", firstFivesCtrl.delete);
module.exports = router;
