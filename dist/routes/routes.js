"use strict";
// CONTROLLER FILE
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../models/user");
const app = express_1.default();
app.get("/", (rq, res) => {
    res.send("<h1>Welcome to your server!</h1>");
});
app.get("/users", (rq, res) => {
    res.json("get user");
});
app.post("/users", (rq, res) => {
    let body = rq.body;
    let usuario = new user_1.UserModel({
        name: body.name,
        email: body.email,
        password: body.password,
        role: body.role,
    });
    usuario.save((err, usuarioDB) => {
        return err
            ? res.status(400).json({ ok: false, message: err })
            : res.json({ ok: true, user: usuarioDB });
    });
});
app.put("/users/:id", (rq, res) => {
    let id = rq.params.id;
    let body = rq.body;
    res.json({
        person: body,
    });
});
app.delete("/users", (rq, res) => {
    res.json("delete user");
});
module.exports = app;
//# sourceMappingURL=routes.js.map