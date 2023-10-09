const router = require("express").Router();
const Authenticate = require("../Authentication");
let Event = require("../controller/Event");

router.get("/", Authenticate, Event.getAll);

//Add Function

router.post("/add", Authenticate, Event.create);

// Get Data
router.get("/:id", Authenticate, Event.getOne);

//Delete Data

router.delete("/:id", Authenticate, Event.delete);

// Update data
router.put("/update/:id", Authenticate, Event.update);

module.exports = router;
