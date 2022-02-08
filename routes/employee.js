const express=require('express');

const Controller= require('../controller/employee');
const emp= new Controller();
const getController=require('../controller/getController');
const getemp=new getController();
const postController=require('../controller/postController');
const postemp=new postController();
const putController=require('../controller/putController');
const putemp=new putController();
const deleteController=require('../controller/deleteController');
const delemp=new deleteController();

const router=express.Router();
const bodyparser=require('body-parser');

class RouteHandler{
  rstart(){
    console.log("Aiman");
    router.use(bodyparser.json());
    router.use(bodyparser.urlencoded({ extended: true }));
    
    // get /employee/getinfo
    // router.get('/getinfo',emp.getEmployee);
    router.get('/getinfo',getemp.getData);
    
    // get /employee/getinfo/1001
    // router.get('/getinfo/:id',emp.getsingleEmployee);
    router.get('/getinfo/:id',getemp.getDataById);
    
    
    // post /employee/postinfo
    // router.post('/postinfo',emp.postEmployee);
    router.post('/postinfo',postemp.postData);
    
    // put /employee/putinfo/1001
    // router.put('/putinfo/:id',emp.putEmployee);
    router.put('/putinfo/:id',putemp.putData);

    
    
    // delete /employee/delinfo/1001
    // router.delete('/delinfo/:id',emp.delEmployee);
    router.delete('/delinfo/:id',delemp.deleteData);

    // delete /employee/delmulinfo?id=1001,1002,1003
    // router.delete('/delmulinfo',emp.delmulEmployee);
    router.delete('/delmulinfo',delemp.delmulData);
    
    module.exports.router=router;
  }
}

module.exports.RouteHandler=RouteHandler;


