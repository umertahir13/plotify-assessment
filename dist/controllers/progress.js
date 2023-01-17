"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_controller_1 = __importDefault(require("./api.controller"));
const dataSet_1 = __importStar(require("../dataSet"));
exports.default = { createTask, getAllTasks, completeTask, editTask };
function createTask(req, res) {
    const { taskDescription, taskhead } = req.body;
    // console.log(taskhead)
    if (taskhead && taskDescription) {
        switch (taskhead) {
            case dataSet_1.data.Foundation:
                dataSet_1.default.Foundation.push({
                    taskDescription,
                    status: false,
                    id: dataSet_1.default.Foundation.length + 1
                });
                break;
            case dataSet_1.data.Discovery:
                dataSet_1.default.Discovery.push({
                    taskDescription,
                    status: false,
                    id: dataSet_1.default.Discovery.length + 1
                });
                break;
            case dataSet_1.data.Delivery:
                dataSet_1.default.Delivery.push({
                    taskDescription,
                    status: false,
                    id: dataSet_1.default.Delivery.length + 1
                });
                break;
            default:
                console.log(taskhead);
                return api_controller_1.default.apiError(res, "Invalid Data");
        }
        return api_controller_1.default.apiSuccess(res, dataSet_1.default, `Step created at ${taskhead}`);
    }
    else {
        return api_controller_1.default.apiError(res, "Invalid Data");
    }
}
function getAllTasks(req, res) {
    return api_controller_1.default.apiSuccess(res, dataSet_1.default);
}
function completeTask(req, res) {
    const { id, taskhead } = req.body;
    let flag = false;
    if (taskhead == 'Discovery') {
        dataSet_1.default.Foundation.forEach(element => {
            if (element.status === false) {
                flag = true;
            }
        });
        if (flag) {
            return api_controller_1.default.apiError(res, 'Please complete Foundation tasks first');
        }
    }
    else if (taskhead == 'Delivery') {
        dataSet_1.default.Discovery.forEach(element => {
            if (element.status === false) {
                flag = true;
            }
        });
        if (flag) {
            return api_controller_1.default.apiError(res, 'Please complete Discovery tasks first');
        }
    }
    if (id) {
        switch (taskhead) {
            case dataSet_1.data.Foundation:
                dataSet_1.default.Foundation.forEach(step => {
                    if (step.id === id) {
                        step.status = true;
                    }
                });
                break;
            case dataSet_1.data.Discovery:
                dataSet_1.default.Discovery.forEach(step => {
                    if (step.id === id) {
                        step.status = true;
                    }
                });
                break;
            case dataSet_1.data.Delivery:
                dataSet_1.default.Delivery.forEach(step => {
                    if (step.id === id) {
                        step.status = true;
                    }
                });
                break;
            default:
                return api_controller_1.default.apiError(res, "Invalid Data");
        }
        return api_controller_1.default.apiSuccess(res, dataSet_1.default, "Updated Successfully !");
    }
}
function editTask(req, res) {
    const { id, taskhead, taskDescription } = req.body;
    if (taskhead && taskDescription && id) {
        switch (taskhead) {
            case dataSet_1.data.Foundation:
                dataSet_1.default.Foundation.forEach(step => {
                    if (step.id === id) {
                        step.taskDescription = taskDescription;
                    }
                });
                break;
            case dataSet_1.data.Discovery:
                dataSet_1.default.Discovery.forEach(step => {
                    if (step.id === id) {
                        step.taskDescription = taskDescription;
                    }
                });
                break;
            case dataSet_1.data.Delivery:
                dataSet_1.default.Delivery.forEach(step => {
                    if (step.id === id) {
                        step.taskDescription = taskDescription;
                    }
                });
                break;
            default:
                return api_controller_1.default.apiError(res, "Invalid Data");
        }
        return api_controller_1.default.apiSuccess(res, dataSet_1.default, "Updated Successfully !");
    }
    else {
        return api_controller_1.default.apiError(res, 'values are missing');
    }
}
