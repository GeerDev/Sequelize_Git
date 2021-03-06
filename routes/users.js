const express = require("express");
const UserController = require("../controllers/UserController");
const router = express.Router();

router.post("/", UserController.create);
router.get("/", UserController.getAll);
router.delete("/delete/:id", UserController.delete);

module.exports = router;
