"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var indexRouter_1 = __importDefault(require("../routes/indexRouter"));
var userRouter_1 = __importDefault(require("../routes/userRouter"));
var routeSetup = function (appInstance) {
    appInstance.use("/index", indexRouter_1.default);
    appInstance.use("/users", userRouter_1.default);
};
exports.default = routeSetup;
//# sourceMappingURL=routeConfig.js.map