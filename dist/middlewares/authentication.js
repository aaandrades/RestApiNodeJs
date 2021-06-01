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
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAdminRole = exports.verifyTokenMiddleware = void 0;
const jwt = __importStar(require("jsonwebtoken"));
// Verify Token
const verifyTokenMiddleware = (req, res, next) => {
    let token = req.get("Authorization");
    jwt.verify(token, process.env.SEED, (err, decode) => {
        // if exist some error, throw exception in validation of token
        if (err) {
            return res.status(401).json({
                ok: false,
                err,
            });
        }
        req.user = decode.user;
        next();
    });
};
exports.verifyTokenMiddleware = verifyTokenMiddleware;
const verifyAdminRole = (req, res, next) => {
    const { role } = req.user;
    return role === "ADMIN_ROLE"
        ? next()
        : res.status(401).json({ ok: false, message: "Restricted Access just for Admins" });
};
exports.verifyAdminRole = verifyAdminRole;
//# sourceMappingURL=authentication.js.map