import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import sqlite3 from "sqlite3";

const usersDB = new sqlite3.Database(
  path.resolve(__dirname, "../src/api/users.db")
);

/* eslint-disable no-console */
const port = 4000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.post("/register", function(req, res) {
  // check if adds salt
  const hashedPassword = bcrypt.hashSync(req.query.password, 8);

  usersDB.run(
    "INSERT INTO Users (id, firstName, lastName, email, password) VALUES ($id, $firstName, $lastName, $email, $password)",
    {
      $id: req.query.id,
      $firstName: req.query.firstName,
      $lastName: req.query.lastName,
      $email: req.query.email,
      $password: hashedPassword
    },
    err => {
      console.log(err);
      if (err) {
        return res
          .status(500)
          .send("There was a problem registering the user.");
      } else {
        const token = jwt.sign({ id: req.query.id }, "dummy_token", {
          expiresIn: 26400
        });
        res.status(200).send({ auth: true, token: token });
      }
    }
  );
});

app.get("/account", function(req, res) {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).send({ auth: false, message: "No token found" });
  }

  jwt.verify(token, "dummy_token", function(err, decoded) {
    console.log(decoded);
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate user." });

    res.status(200).send(decoded);
  });
});

app.get("/users", function(req, res) {
  res.json(usersDB);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
