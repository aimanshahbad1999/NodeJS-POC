const db= require('../db/database');

//EmployeeController
class Controller{
  
  getEmployee =async(req,res,next) =>{
    try{
    const sql= "SELECT * FROM employee";
    await db.query(sql,(err,rows,fields)=>{
      if(err){   
        res.status(402).send({error: "Database Connectivity issue"});
      }
      return res.json(rows);
    })
  }catch(error){
    console.log(error);
  }
  };
   
  getsingleEmployee=async (req,res,next)=>{
    try{
      const id= req.params.id;
      console.log(id);
      const sql=`SELECT * FROM employee WHERE emp_id=${id}`;
      await db.query(sql,(err,rows,fields)=>{
        if(err){
         return (res.status(402).send({error: "Database Connectivity issue"}));
        }
        return(res.json(rows));
      })
    }catch(error){
      console.log(error);
    }
  
  };

  postEmployee=(req,res,next)=>{
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


  putEmployee=(req,res,next)=>{
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

  delEmployee=(req,res,next)=>{
   
      const id =req.params.id;
      const sql=`DELETE from employee WHERE emp_id=${id}`;
      db.query(sql,(err,rows,fields)=>{
        if(err){
          return(res.status(402).send({error: "Database Connectivity issue"}));
        }
        return(res.json({status:"Record Deleted Successfully" , emp_id: id}));
      });
  };

  delmulEmployee=(req,res,next)=>{
      const del =req.query;
      const list= del.id.split(",");
      console.log(list);
      
      for(let i=0;i<list.length;i++){
        let sql=`DELETE from employee WHERE emp_id=${list[i]}`;
        db.query(sql,(err,rows,fields)=>{
          if(err){
            return(res.status(402).send({error: "Database Connectivity issue"}));
          }
        });
      }
      return(res.json({status:"Record Deleted Successfully" , emp_id: list}));
   
  };
}

module.exports=Controller;


