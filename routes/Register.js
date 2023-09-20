const router = require('express').Router();
let User = require('../models/User.model');

//Register User
router.route("/:_id/reg").post((req, res) => {

    const _id = req.params._id;
    const name = req.body.name;
    const email = req.body.Email;
    const nearbyTown = req.body.nearbyTown;
    const contactNo = req.body.contactNo;
    const userType = req.body.userType;
    const password = req.body.password;
    const img1 = req.body.img1;

    const regUser = new User({

        _id,
        name,
        email,
        nearbyTown,
        contactNo,
        userType,
        password,
        img1

    })


    regUser.save().then(() => {

        res.json("Registration Successfull");

    }).catch((err) => {

        console.log(err);

    })

})

//Display Profile(class)
router.get("/prof/:id", (req, res) => {

    let displayProfile = req.params.id;
    User.findById(displayProfile,(err,prof) => {
    if(err){
       return res.status(400).json({success:false,err});

    }
    return res.status(200).json({
        success:true,
        prof
    })
  }) 
})

//Display All
router.get("/allprof",(req,res)=>{

  User.find().exec((err,User)=>{
        if(err){
            return res.status(400).json({
               error:err
           });
       }
          return res.status(200).json({
            success:true,
            existingDRouter:User
        });
    });
})





//Update Profile(class)
router.put("/updateProfile/:id",(req,res) => {

    
    User.findByIdAndUpdate(

        req.params.id,
        {
          $set : req.body
        },
   
        (err,User)=>{
          if(err){
   
            return res.status(400).json({error:err});
          }
   
          return res.status(200).json({
                
            success:"Update successfully"
   
          });
        }
     )
      
    });
    module.exports = router;

//Update Profile(function)
/*router.put("/updateProfile1/:id").put(async(req,res)=>{
    let Id=req.params.id;
    const{}
})*/







//Delete Profile

router.route("/deleteProfile/:id").delete(async(req, res) => {


    let userProfile = req.params.id;
    await User.findByIdAndDelete(userProfile).then(() => {
        res.status(200).send({ status: "User Profile Successfully deleted" })
    }).catch((err) => {

        console.log(err.message);
        res.status(500).send({ status: "Can Not Delete User Profile", error: err.message })

    })
})

module.exports = router;