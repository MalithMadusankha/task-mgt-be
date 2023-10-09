let Task = require("../models/Task.model");

exports.getAll = (req, res, next) => {
  Task.find()
    .then((Task) => res.json(Task))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.create = (req, res, next) => {
  const Tid = req.body.Tid;
  const Taskname = req.body.Taskname;
  const Taskcategory = req.body.Taskcategory;
  const Modified = Date.parse(req.body.Modified);
  const Description = req.body.Description;
  const status = req.body.status;

  const newTask = new Task({
    Tid,
    Taskname,
    Taskcategory,
    Modified,
    Description,
    status,
  });

  newTask
    .save()
    .then(() => res.json("Task added!"))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.getOne = (req, res, next) => {
  Task.findById(req.params.id)
    .then((Task) => res.json(Task))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.delete = (req, res, next) => {
  Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("Task deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
};

exports.update = (req, res, next) => {
  Task.findById(req.params.id)
    .then((Task) => {
      Task.Tid = req.body.Tid;
      Task.Taskname = req.body.Taskname;
      Task.Taskcategory = req.body.Taskcategory;
      Task.Modified = Date.parse(req.body.Modified);
      Task.Description = req.body.Description;
      Task.status = req.body.status;

      Task.save()
        .then(() => res.json("Task updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
};
