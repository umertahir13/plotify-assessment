"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const progress_1 = __importDefault(require("../controllers/progress"));
const router = express_1.default.Router();
router.post('/createTask', progress_1.default.createTask);
router.get('/getAllTasks', progress_1.default.getAllTasks);
router.post('/completeTask', progress_1.default.completeTask);
router.post('/editTask', progress_1.default.editTask);
exports.default = router;
