const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const path = require("path");
const app=express();
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'dogs',
  password: 'password',
});

// Generate random user data
const getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // Correct casing
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// const users = [];
// for (let i = 0; i < 100; i++) {
//   users.push(getRandomUser());
// }

// const query = 'INSERT INTO user (id, name, email, password) VALUES ?';

// connection.query(query, [users], (err, result) => {
//   if (err) {
//     console.error('Error inserting users:', err);
//   } else {
//     console.log('Successfully inserted users:', result.affectedRows);
//   }
//   connection.end(); // End connection here after query is complete
// });
app.get("/", (req, res) => {
  const query = "SELECT COUNT(*) AS count FROM user";
  try{
  connection.query(query, (err, result) => {
    if (err) throw err; 
    let count = result[0]["count"];
          console.log(result[0]["count(*)"]);
          res.render("home.ejs",{count});
  });
  }catch(err){
    console.log(err);
    res.send("some error occurred");
        } 
      
    });
    //show route
app.get("/user", (req, res) => {
  let q='SELECT * FROM user';
  try{
  connection.query(q, (err, result) => {
    if (err) throw err; 
    let users = result;

    res.render("users.ejs",{users}); 
  })
  }
catch(err){
  console.log(err);
  res.send("some error occurred");
        }});
   
app.listen("8080",()=>{
    console.log("Server is running on port 8080")
});