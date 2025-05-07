const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

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

const users = [];
for (let i = 0; i < 100; i++) {
  users.push(getRandomUser());
}

const query = 'INSERT INTO user (id, name, email, password) VALUES ?';

connection.query(query, [users], (err, result) => {
  if (err) {
    console.error('Error inserting users:', err);
  } else {
    console.log('Successfully inserted users:', result.affectedRows);
  }
  connection.end(); // End connection here after query is complete
});
