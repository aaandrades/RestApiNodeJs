"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../models/user");
// Import in typescript isn't working, TODO: Change require to import.
const bcrypt = require("bcrypt");
const app = express_1.default();
app.post("/login", (req, res) => {
    let body = req.body;
    user_1.UserModel.findOne({ email: body.email }, (err, usuarioBD) => {
        if (err) {
            return res.status(400).json({ ok: false, err });
        }
        // User exist
        if (!usuarioBD) {
            return res
                .status(500)
                .json({ ok: false, message: "(Usuario) o contraseña incorrectos" });
        }
        // password match
        if (!bcrypt.compareSync(body.password, usuarioBD.password)) {
            return res
                .status(400)
                .json({ ok: false, message: "Usuario o (contraseña) incorrectos" });
        }
        res.status(200).json({
            ok: true,
            user: usuarioBD,
            token: '123'
        });
    });
});
module.exports = app;
//# sourceMappingURL=login.js.map