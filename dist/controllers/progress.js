"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_controller_1 = __importDefault(require("./api.controller"));
exports.default = { test };
function test(req, res) {
    console.log('working');
    return api_controller_1.default.apiSuccess(res, 'working');
}
