const adminRouter =require('./admin/admin.routes')

x= (app)=>{
    console.log("initiallizing routes")
    app.use('',adminRouter)  
   
}
module.exports =x;