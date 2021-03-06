"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("./config/config");
const mongoose_1 = __importDefault(require("mongoose"));
// Initialize the serve
const app = express_1.default();
// Decoding and encode
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({
    extended: true,
}));
// Importing routes (Controller)
app.use(require("./routes/controller"));
// Conect to mongoose
mongoose_1.default.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}, (err) => {
    if (err)
        throw err;
    console.log("Database ONLINE");
});
// create a server instance:
app.listen(process.env.PORT, () => console.log(`Starting server in PORT: ${process.env.PORT}`));
//# sourceMappingURL=index.js.map