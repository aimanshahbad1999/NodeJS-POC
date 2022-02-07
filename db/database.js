const mysql=require('mysql2');

pool= mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node',
  password: '12345'

});

module.exports=pool;
