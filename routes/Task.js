const router = require("express").Router();
const Authenticate = require("../Authentication");
let Task = require("../controller/Task");

router.get("/", Authenticate, Task.getAll);

//Add Function
router.post("/add", Authenticate, Task.create);

// Get Data
router.get("/:id", Authenticate, Task.getOne);

//Delete Data
router.delete("/:id", Authenticate, Task.delete);

// Update data
router.put("/update/:id", Authenticate, Task.update);

module.exports = router;
