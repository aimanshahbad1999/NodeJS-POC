const db= require('../db/database');
class deleteController{
  deleteData=(req,res,next)=>{
   
    const id =req.params.id;
    const sql=`DELETE from employee WHERE emp_id=${id}`;
    db.query(sql,(err,rows,fields)=>{
      if(err){
        return(res.status(402).send({error: "Database Connectivity issue"}));
      }
      return(res.json({status:"Record Deleted Successfully" , emp_id: id}));
    });
};

delmulData=(req,res,next)=>{
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

module.exports=deleteController