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
const rolesTypeEnums_1 = require("../utils/rolesTypeEnums");
// Import in typescript isn't working, TODO: Change require to import.
const mongooseUniqueValidator = require("mongoose-unique-validator");
let userSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, "The name its mandatory"],
    },
    email: {
        type: String,
        unique: true,
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
        enum: rolesTypeEnums_1.validRoles,
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
// Validate that email must be unique
userSchema.plugin(mongooseUniqueValidator, {
    message: "{PATH} must be unique.",
});
// Create and export a model using IUser interface
exports.UserModel = mongoose_1.default.model("Users", userSchema);
//# sourceMappingURL=user.js.map