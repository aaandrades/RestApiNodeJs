"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = process.env.PORT || 5000;
app.use("*", (req, res) => { res.send("<h1>Welcome to your server!</h1>"); });
//create a server object:
app.listen(port, () => console.log(`hosting @${port}`));
//# sourceMappingURL=index.js.map