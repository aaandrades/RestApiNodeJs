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
exports.UserModel = void 0;
const mongoose_1 = __importStar(require("mongoose"));
let userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "The name its mandatory"],
    },
    email: {
        type: String,
        unique: true,
        // index: { unique: true, dropDups: true },
        required: [true, "The Email its mandatory"],
    },
    password: {
        type: String,
        required: [true, "The password its mandatory"],
    },
    img: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: "USER_ROLE",
        required: false,
    },
    state: {
        type: Boolean,
        default: true,
        required: false,
    },
    google: {
        type: Boolean,
        default: false,
        required: false,
    },
});
const Foo = mongoose_1.default.model("user", userSchema);
Foo.createIndexes();
exports.UserModel = Foo;
//# sourceMappingURL=user.js.map