const express = require("express");
const router = express.Router();
const exitTicketsCtrl = require("../../controllers/api/exitTickets");

//GET /api/exitTickets
router.get("/", exitTicketsCtrl.index);
router.post("/create", exitTicketsCtrl.create);
router.get("/:id", exitTicketsCtrl.show);
router.put("/:id", exitTicketsCtrl.update);
router.delete("/:id", exitTicketsCtrl.delete);
module.exports = router;
