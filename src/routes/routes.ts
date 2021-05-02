// CONTROLLER FILE

import express from "express";
import { UserModel } from "../models/user";
import * as _ from "underscore";
import {
  verifyTokenMiddleware,
  verifyAdminRole,
} from "../middlewares/authentication";

// Import in typescript isn't working, TODO: Change require to import.
const bcrypt = require("bcrypt");
const app = express();

// START SCREEN
app.get("/", (rq, res) => {
  res.send("<h1>Welcome to your server!</h1>");
});

// CREATE
app.post(
  "/users",
  // Verify two conditions
  [verifyTokenMiddleware, verifyAdminRole],
  (rq, res) => {
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
      return err
        ? res.status(400).json({ ok: false, message: err })
        : res.json({ ok: true, user: usuarioDB });
    });
  }
);

// UPDATE
app.put("/users/:id", [verifyTokenMiddleware, verifyAdminRole], (rq, res) => {
  let id = rq.params.id;
  let body = _.pick(rq.body, ["name", "img", "email", "role", "state"]);

  UserModel.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true, context: "query" },
    (err, usuarioDB) => {
      return err
        ? res.status(400).json({ ok: false, message: err })
        : res.json({ ok: true, user: usuarioDB });
    }
  );
});

// GET ALL USER - PAGINATED (Actives)
app.get("/users", verifyTokenMiddleware, (rq, res) => {
  const since = rq.query.since || 0;
  const limit = rq.query.limit || 10;

  // Just return this values
  UserModel.find({ state: true }, "name email role state google")
    // Start in
    .skip(+since)
    // limit of records
    .limit(+limit)
    // Execute the query
    .exec((error, users) => {
      UserModel.count({ state: true }, (err, count) => {
        if (error || err) {
          return res.status(400).json({ ok: false, message: err });
        } else {
          return res.json({ ok: true, users, count });
        }
      });
    });
});

// DELETE ENTIRE RECORD
app.delete(
  "/users/:id",
  [verifyTokenMiddleware, verifyAdminRole],
  (rq, res) => {
    let id = rq.params.id;
    UserModel.findByIdAndDelete(id, {}, (err: any, user) => {
      return err
        ? res.status(400).json({ ok: false, message: err })
        : user
        ? res.json({ ok: true, info: "User Delete!" })
        : res.status(400).json({ ok: false, message: "User does not exist" });
    });
  }
);

// DELETE BY CHANGE A FIELD
app.delete(
  "/users/updateStatus/:id",
  [verifyTokenMiddleware, verifyAdminRole],
  (rq, res) => {
    const id = rq.params.id;
    const body = _.pick(rq.body, ["state"]);
    UserModel.findByIdAndUpdate(
      id,
      body,
      { new: true, runValidators: true, context: "query" },
      (err, usuarioDB) => {
        return err
          ? res.status(400).json({ ok: false, message: err })
          : res.json({ ok: true, user: usuarioDB });
      }
    );
  }
);

module.exports = app;
