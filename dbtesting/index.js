const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./sihtesting.db", sqlite3.OPEN_READWRITE, (err) =>{
    if (err) return console.error(err.message);

    console.log("connection successful");
});

// db.run('CREATE TABLE users(id, username, password)');

// const sql = 'INSERT INTO users( id, username, password) VALUES(?,?,?)';

// db.run(sql, [10007, 'd8rkmind', 'sih123456'], (err)=>{
//     if (err) return console.error(err.message);

//     console.log("Row successfully created");
// });

const sql = 'SELECT * from users';

db.all(sql, [], (err, rows)=>{
    if (err) return console.error(err.message);

    rows.forEach((row)=>{
        console.log(row);
    });
});

db.close((err) =>{
    if (err) return console.error(err.message);
});