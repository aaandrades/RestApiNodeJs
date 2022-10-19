"use strict";
// CONTROLLER FILE
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../models/user");
const _ = __importStar(require("underscore"));
const authentication_1 = require("../middlewares/authentication");
// Import in typescript isn't working, TODO: Change require to import.
const bcrypt = require("bcrypt");
const app = express_1.default();
// START SCREEN
app.get("/", (rq, res) => {
    res.sendFile("index.html", { root: __dirname });
});
// CREATE
app.post("/users", 
// Verify two conditions
(rq, res) => {
    let body = rq.body;
    let usuario = new user_1.UserModel({
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
});
// UPDATE
app.put("/users/:id", [authentication_1.verifyTokenMiddleware], (rq, res) => {
    let id = rq.params.id;
    let body = _.pick(rq.body, ["name", "img", "email", "role", "state"]);
    user_1.UserModel.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: "query" }, (err, usuarioDB) => {
        return err
            ? res.status(400).json({ ok: false, message: err })
            : res.json({ ok: true, user: usuarioDB });
    });
});
// GET ALL USER - PAGINATED (Actives)
app.get("/users", (rq, res) => {
    const since = rq.query.since || 0;
    const limit = rq.query.limit || 10;
    // Just return this values
    user_1.UserModel.find({ state: true }, "name email role state google")
        // Start in
        .skip(+since)
        // limit of records
        .limit(+limit)
        // Execute the query
        .exec((error, users) => {
        user_1.UserModel.count({ state: true }, (err, count) => {
            if (error || err) {
                return res.status(400).json({ ok: false, message: err });
            }
            else {
                return res.json({ ok: true, users, count });
            }
        });
    });
});
// DELETE ENTIRE RECORD
app.delete("/users/:id", [authentication_1.verifyTokenMiddleware, authentication_1.verifyAdminRole], (rq, res) => {
    let id = rq.params.id;
    user_1.UserModel.findByIdAndDelete(id, {}, (err, user) => {
        return err
            ? res.status(400).json({ ok: false, message: err })
            : user
                ? res.json({ ok: true, info: "User Delete!" })
                : res.status(400).json({ ok: false, message: "User does not exist" });
    });
});
// DELETE BY CHANGE A FIELD
app.delete("/users/updateStatus/:id", [authentication_1.verifyTokenMiddleware, authentication_1.verifyAdminRole], (rq, res) => {
    const id = rq.params.id;
    const body = _.pick(rq.body, ["state"]);
    user_1.UserModel.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: "query" }, (err, usuarioDB) => {
        return err
            ? res.status(400).json({ ok: false, message: err })
            : res.json({ ok: true, user: usuarioDB });
    });
});
module.exports = app;
//# sourceMappingURL=routes.js.map