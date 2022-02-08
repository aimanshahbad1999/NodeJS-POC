const db= require('../db/database');
class getController{

  getData =async(req,res,next) =>{
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

  getDataById=async (req,res,next)=>{
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



}

module.exports=getController;