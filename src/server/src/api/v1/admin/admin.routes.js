const express = require('express')
const adminController =require('./admin.controller')

const router =express.Router();

router.post('/addData',function(req,res){
    adminController.addData(req,res)
})
router.get('/viewData',function(req,res){
    adminController.viewData(req,res)
})

module.exports= router;