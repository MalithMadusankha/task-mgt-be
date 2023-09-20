const router = require('express').Router();
let Task = require('../models/Task.model');

router.route('/').get((req, res) => {
    Task.find()
        .then(Task => res.json(Task))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Add Function

router.route('/add').post((req, res) => {

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



    newTask.save()
        .then(() => res.json('Task added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Get Data 
router.route('/:id').get((req, res) => {
    Task.findById(req.params.id)
        .then(Task => res.json(Task))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Delete Data

router.route('/:id').delete((req, res) => {
    Task.findByIdAndDelete(req.params.id)
        .then(() => res.json('Task deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});


// Update data
router.route('/update/:id').post((req, res) => {
    Task.findById(req.params.id)
        .then(Task => {
            Task.Tid = req.body.Tid;
            Task.Taskname = req.body.Taskname;
            Task.Taskcategory = req.body.Taskcategory;
            Task.Modified = Date.parse(req.body.Modified);
            Task.Description = req.body.Description;
            Task.status = req.body.status;


            Task.save()
                .then(() => res.json('Task updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;