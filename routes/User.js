const router = require("express").Router();
const Authenticate = require("../Authentication");
let User = require("../controller/User");

router.get("/type/:type", Authenticate, User.getAll);

// getuser by firebas Id
router.get("/firebase/:id", Authenticate, User.getByfirebasId);

//Add Function
router.post("/add", Authenticate, User.create);

// Get Data
router.get("/:id", Authenticate, User.getOne);

//Delete Data
router.delete("/:id", Authenticate, User.delete);

// Update data
router.put("/update/:id", Authenticate, User.update);

module.exports = router;
