"use strict";
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
const jwt = __importStar(require("jsonwebtoken"));
// Import in typescript isn't working, TODO: Change require to import.
const bcrypt = require("bcrypt");
const app = express_1.default();
app.post("/login", (req, res) => {
    let body = req.body;
    user_1.UserModel.findOne({ email: body.email }, (err, userDB) => {
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
        let token = jwt.sign({
            user: userDB,
        }, process.env.SEED, { expiresIn: process.env.CADUCITY_TOKEN });
        res.status(200).json({
            ok: true,
            user: userDB,
            token,
        });
    });
});
module.exports = app;
//# sourceMappingURL=login.js.map