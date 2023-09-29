const router = require("express").Router();
let User = require("../models/User.model");

router.route("/type/:type").get((req, res) => {
  console.log("<===== Get users ====>");
  User.find({ type: req.params.type })
    .then((User) => res.json(User))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Add Function

router.route("/add").post((req, res) => {
  const email = req.body.email;
  const firebaseId = req.body.firebaseId;
  const type = req.body.type;
  const userId = req.body.userId;
  const username = req.body.username;
  const address = req.body.address;
  const phone = Number(req.body.phone);
  const birthday = Date.parse(req.body.birthday);
  const position = req.body.position;
  const gender = req.body.gender;

  const newUser = new User({
    email,
    firebaseId,
    type,
    userId,
    username,
    address,
    phone,
    birthday,
    position,
    gender,
  });

  newUser
    .save()
    .then(() => res.json({ message: "User added!", status: 200 }))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get Data
router.route("/:id").get((req, res) => {
  User.findById(req.params.id)
    .then((User) => res.json(User))
    .catch((err) => res.status(400).json("Error: " + err));
});

//Delete Data

router.route("/:id").delete((req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => res.json("User deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Update data
router.route("/update/:id").post((req, res) => {
  User.findById(req.params.id)
    .then((User) => {
      User.email = req.body.email;
      User.firebaseId = req.body.firebaseId;
      User.type = req.body.type;
      User.userId = req.body.userId;
      User.username = req.body.username;
      User.address = req.body.address;
      User.phone = Number(req.body.phone);
      User.birthday = Date.parse(req.body.birthday);
      User.position = req.body.position;
      User.gender = req.body.gender;

      User.save()
        .then(() => res.json("User updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
