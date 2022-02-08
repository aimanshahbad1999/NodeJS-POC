const db= require('../db/database');

class putController{

  putData=(req,res,next)=>{
    try{
      const id =req.params.id;
      const name= req.body.name;
      const job= req.body.job;
      const sal= req.body.sal;
      const dept= req.body.dept;
      console.log(dept);
      const sql=`UPDATE employee SET emp_name="${name}", emp_job="${job}", emp_sal="${sal}", emp_dept="${dept}" WHERE emp_id=${id}`;              
      db.query(sql,(err,rows,fields)=>{
        if(err){
          return (res.status(402).send({error: "Database Connectivity issue"}));
        }
        return (res.json({status:"Updated Successfully" , emp_id: id}));
      });
    }catch(error){
      console.log(error)
    }
   
  };

}

module.exports=putController;