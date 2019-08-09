let adminController = {}
var db=require('../../../../models')
// const user = require('../../../../models/user');
var user=db.user;

adminController.addData = (req, res) => {
    console.log("------------",req.body.name)
        user.create({
            first_name : req.body.name,
            email : req.body.email,
            designation:req.body.designation,
            signup:req.body.signup,
            module_name:req.body.module_name,
            permission_name:req.body.permission_name
          
      }).then( (result) => res.json(result) )
   
}

adminController.viewData = (req, res) => {
    user.findAll().then( (result) => res.json(result) )
}

module.exports = adminController;

