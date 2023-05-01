const express = require("express");
const router = express.Router();

router.get("/");

router.post("/task");

router.put("/task");

router.delete("/task");

module.exports = router;
