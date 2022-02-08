const db= require('../db/database');

class postController{

  postData=(req,res,next)=>{
    try{
      let len = req.body.length;
      console.log(len);
      for (let i = 0; i < len; i++) {
        console.log(req.body[i]);
        let id= req.body[i].id;
        let name= req.body[i].name;
        let job= req.body[i].job;
        let sal= req.body[i].sal;
        let dept= req.body[i].dept;
        console.log(dept);
        let sql=`INSERT INTO employee (emp_id, emp_name , emp_job , emp_sal , emp_dept) VALUES ("${id}", "${name}", "${job}", "${sal}", "${dept}")`;    
        db.query(sql,(err,rows,fields)=>{
          if(err){
            return (res.status(402).send({error: "Database Connectivity issue"}));
          }
        });
      }
      return (res.json({status:"Successfully Inserted"}));
    }
    catch(error){
      console.log(error);
    }
   
  };

}

module.exports=postController;