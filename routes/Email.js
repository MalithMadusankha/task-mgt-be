const router = require("express").Router();
const Email = require("../controller/Email");

router.post("/send", Email.send);

module.exports = router;
