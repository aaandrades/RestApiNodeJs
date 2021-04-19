// CONTROLLER FILE

import express from "express";
import { UserModel } from "../models/user";

// Import in typescript isn't working, TODO: Change require to import.
const bcrypt = require("bcrypt");
const app = express();

app.post("/users", (rq, res) => {
  let body = rq.body;
  let usuario = new UserModel({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
  });

  // Save the new object created with an instance of the model User
  usuario.save((err, usuarioDB) => {
    // TODO: Improve delete of password
    usuarioDB.password = undefined;
    return err
      ? res.status(400).json({ ok: false, message: err })
      : res.json({ ok: true, user: usuarioDB });
  });
});

app.put("/users/:id", (rq, res) => {
  let id = rq.params.id;
  let body = rq.body;
  UserModel.findByIdAndUpdate(id, body, { new: true }, (err, usuarioDB) => {
    return err
      ? res.status(400).json({ ok: false, message: err })
      : res.json({ ok: true, user: usuarioDB });
  });
});

app.get("/", (rq, res) => {
  res.send("<h1>Welcome to your server!</h1>");
});

app.get("/users", (rq, res) => {
  res.json("get user");
});

app.delete("/users", (rq, res) => {
  res.json("delete user");
});

module.exports = app;
