const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.send("Get login user");
});
router.post("/", (req, res) => {
  res.send("Get login user");
});
module.exports = router;
