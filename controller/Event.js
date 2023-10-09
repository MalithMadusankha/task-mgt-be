let Event = require("../models/Event.model");

exports.getAll = (req, res, next) => {
  {
    console.log("<===== Get Events ====>");
    Event.find()
      .then((Event) => res.json(Event))
      .catch((err) => res.status(400).json("Error: " + err));
  }
};

exports.create = (req, res, next) => {
  console.log("<===== Add Events ====>");
  const eventId = req.body.eventId;
  const name = req.body.name;
  const address = req.body.address;
  const phone = Number(req.body.phone);
  const date = Date.parse(req.body.date);
  const attend = req.body.attend;

  const newEvent = new Event({
    eventId,
    name,
    address,
    phone,
    date,
    attend,
  });

  newEvent
    .save()
    .then(() => res.json("Event added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getOne = (req, res, next) => {
  console.log("<===== Get One Event ====>");
  Event.findById(req.params.id)
    .then((Event) => res.json(Event))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.delete = (req, res, next) => {
  console.log("<===== Delete Event ====>");
  Event.findByIdAndDelete(req.params.id)
    .then(() => res.json("Event deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.update = (req, res, next) => {
  console.log("<===== Update Event ====>");
  Event.findById(req.params.id)
    .then((Event) => {
      Event.eventId = req.body.eventId;
      Event.name = req.body.name;
      Event.address = req.body.address;
      Event.phone = Number(req.body.phone);
      Event.date = Date.parse(req.body.date);
      Event.attend = req.body.attend;

      Event.save()
        .then(() => res.json("Event updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};
