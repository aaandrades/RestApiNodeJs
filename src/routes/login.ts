import express from "express";
import { UserModel } from "../models/user";
import * as _ from "underscore";
import * as jwt from "jsonwebtoken";
// Import in typescript isn't working, TODO: Change require to import.
const bcrypt = require("bcrypt");
const app = express();


app.post("/login", (req, res) => {
  let body = req.body;

  UserModel.findOne({ email: body.email }, (err: any, userDB: any) => {
    if (err) {
      return res.status(400).json({ ok: false, err });
    }

    // User exist
    if (!userDB) {
      return res
        .status(500)
        .json({ ok: false, message: "(User) or password incorrects" });
    }

    // password match
    if (!bcrypt.compareSync(body.password, userDB.password)) {
      return res
        .status(400)
        .json({ ok: false, message: "User or (password) incorrects" });
    }
    // Create JWT and return token and userInfo.
    let token = jwt.sign(
      {
        user: userDB,
      },
      process.env.SEED,
      { expiresIn: process.env.CADUCITY_TOKEN }
    );

    res.status(200).json({
      ok: true,
      user: userDB,
      token,
      tokenApi: 'k_07j13ga2'
    });
  });
});

module.exports = app;
