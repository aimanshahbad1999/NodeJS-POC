const db= require('../db/database');

class Controller{
  getEmployee = (req,res,next) => {
    return new Promise((resolve,reject)=>{
      const sql="SELECT * FROM employee";
      db.query(sql,(err,rows,fields)=>{
        if(err){   
          reject(res.status(402).send({error: "Database Connectivity issue"}));
        }
        resolve(res.json(rows));
      })
    }).then((result)=>{
        return result;
    }).catch((error)=>{
        return error;
    })  
  };


  getsingleEmployee=(req,res,next)=>{
    return new Promise((resolve,reject)=>{
      const id= req.params.id;
      console.log(id);
      const sql=`SELECT * FROM employee WHERE emp_id=${id}`;
      db.query(sql,(err,rows,fields)=>{
        if(err){
          reject(res.status(402).send({error: "Database Connectivity issue"}));
        }
        resolve(res.json(rows));
      })
    }).then((result)=>{
      return result;
    }).catch((error)=>{
      return error;
    });      
  };


  postEmployee=(req,res,next)=>{
    return new Promise((resolve,reject)=>{
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
            reject(res.status(402).send({error: "Database Connectivity issue"}));
          }
        });
      }
      resolve(res.json({status:"Successfully Inserted"}));
    }).then((result)=>{
      return result;
    }).catch((error)=>{
      return error;          
    })
  };


  putEmployee=(req,res,next)=>{
    return new Promise((resolve,reject)=>{
      const id =req.params.id;
      const name= req.body.name;
      const job= req.body.job;
      const sal= req.body.sal;
      const dept= req.body.dept;
      console.log(dept);
      const sql=`UPDATE employee SET emp_name="${name}", emp_job="${job}", emp_sal="${sal}", emp_dept="${dept}" WHERE emp_id=${id}`;              
      db.query(sql,(err,rows,fields)=>{
        if(err){
          reject(res.status(402).send({error: "Database Connectivity issue"}));
        }
        resolve(res.json({status:"Updated Successfully" , emp_id: id}));
      });
    }).then((result)=>{
      return result;
    }).catch((error)=>{
      return error;
    })
  };


  delEmployee=(req,res,next)=>{
    return new Promise((resolve,reject)=>{
      const id =req.params.id;
      const sql=`DELETE from employee WHERE emp_id=${id}`;
      db.query(sql,(err,rows,fields)=>{
        if(err){
          reject(res.status(402).send({error: "Database Connectivity issue"}));
        }
        resolve(res.json({status:"Record Deleted Successfully" , emp_id: id}));
      });
    }).then((result)=>{
      return result;
    }).catch((error)=>{
      return error;
    })
  };
}

module.exports=Controller;


