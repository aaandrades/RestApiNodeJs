// const express = require("express");
import express from "express";

import './config/config';

const app = express();
const port = 8080;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (rq, res) => {
  res.json("Hello worlds!");
});

app.get("/users", (rq, res) => {
  res.json("get user");
});

app.post("/users", (rq, res) => {
  let body = rq.body;
  body.name === undefined ? res.status(400).json({ok: false, message: 'The name its mandatory'}) : res.json({ person: body });
});

app.put("/users/:id", (rq, res) => {
  let id = rq.params.id;
  let body = rq.body;
  console.log("ID: ", id);
  console.log("NOMBRE: ", body);
  res.json({
    person: body,
  });
});
app.delete("/users", (rq, res) => {
  res.json("delete user");
});

app.listen(process.env.PORT, () => {
  console.log(`server started at http://localhost:${process.env.PORT}`);
});
