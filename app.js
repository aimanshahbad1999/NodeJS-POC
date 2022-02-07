const express=require('express');

const Routes =require('./routes/employee')

const empr=new Routes.RouteHandler();

empr.rstart();

const db= require('./db/database');

const app = express();

class Start{
  constructor(){
    app.use('/employee',Routes.router);
    app.listen(8086);
  }
}

new Start();









