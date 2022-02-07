const express=require('express');
const Controller= require('../controller/employee');
const emp= new Controller();
const router=express.Router();
const bodyparser=require('body-parser');

class RouteHandler{
  rstart(){
    console.log("Aiman");
    router.use(bodyparser.json());
    router.use(bodyparser.urlencoded({ extended: true }));
    
    // get /employee/getinfo
    router.get('/getinfo',emp.getEmployee);
    
    // get /employee/getinfo/1001
    router.get('/getinfo/:id',emp.getsingleEmployee);
    
    // post /employee/postinfo
    router.post('/postinfo',emp.postEmployee);
    
    // put /employee/putinfo/1001
    router.put('/putinfo/:id',emp.putEmployee);

    
    
    // delete /employee/delinfo/1001
    router.delete('/delinfo/:id',emp.delEmployee);

    // delete /employee/delmulinfo?id=1001,1002,1003
    router.delete('/delmulinfo',emp.delmulEmployee);
    
    module.exports.router=router;
  }
}

module.exports.RouteHandler=RouteHandler;


