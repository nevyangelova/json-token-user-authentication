import path from "path";
import sqlite3 from "sqlite3";

const usersDB = new sqlite3.Database(
  path.resolve(__dirname, "../src/database/users.db")
);

usersDB.run(
  "CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY, firstName STRING NOT NULL, lastName STRING NOT NULL, email STRING NOT NULL, password STRING NOT NULL)"
);

export default usersDB;

// my personal token
// {
//     "auth": true,
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI0MiIsImlhdCI6MTUyODE5ODUyNSwiZXhwIjoxNTI4MjI0OTI1fQ._HnFOUo_RTjnOvK1iMfpUL10sHPb7HaJkuArKKbrpoo"
// }
