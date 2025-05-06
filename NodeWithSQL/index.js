const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'dogs',
  password: 'password',
});
try{connection.query("SHOW TABLES",
 
  (err, results)=>{
    if(err)throw err;
 console.log(results); // results contains rows returned by server
 
});}
catch{
  console.log(err);
}

connection.end();
let  getRandomUser=() => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.username(), // before version 9.1.0, use userName()
      email: faker.internet.email(),
     password: faker.internet.password(),
     
    };
  }
  // console.log(getRandomUser());