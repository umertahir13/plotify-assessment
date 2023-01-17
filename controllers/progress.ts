import apiCtrl from './api.controller';
import dataSet, {data} from '../dataSet'


export default {createTask, getAllTasks, completeTask, editTask};

export interface ITask {
    taskDescription: string;
    taskhead: string;
    status: boolean
}

function createTask(req : any, res : any) {

    const {taskDescription, taskhead} : ITask = req.body
    console.log(taskhead)
    if (taskhead && taskDescription) {
        switch (taskhead) {
            case data.Foundation:
                dataSet.Foundation.push({
                    taskDescription,
                    status: false,
                    id: dataSet.Foundation.length + 1
                })
                break
            case data.Discovery:
                dataSet.Discovery.push({
                    taskDescription,
                    status: false,
                    id: dataSet.Discovery.length + 1
                })
                break
            case data.Delivery:
                dataSet.Delivery.push({
                    taskDescription,
                    status: false,
                    id: dataSet.Delivery.length + 1
                })
                break
            default:
                console.log(taskhead)
                return apiCtrl.apiError(res, "Invalid Data")

        }
        return apiCtrl.apiSuccess(res, dataSet, `Step created at ${taskhead}`)
    } else {
        return apiCtrl.apiError(res, "Invalid Data")
    }
}


function getAllTasks(req : any, res : any) {

    return apiCtrl.apiSuccess(res, dataSet);
}

function completeTask(req : any, res : any) {
    const {id, taskhead} = req.body
    let flag = false;

    if (taskhead == 'Discovery') {
        dataSet.Foundation.forEach(element => {
            if (element.status === false) {
                flag = true;
            }
        });

        if (flag) {
            return apiCtrl.apiError(res, 'Please complete Foundation tasks first')
        }
    } else if (taskhead == 'Delivery') {
        dataSet.Discovery.forEach(element => {
            if (element.status === false) {
                flag = true;
            }
        });

        if (flag) {
            return apiCtrl.apiError(res, 'Please complete Discovery tasks first')
        }
    }


    if (id) {
        switch (taskhead) {
            case data.Foundation:
                dataSet.Foundation.forEach(step => {
                    if (step.id === id) {
                        step.status = true
                    }
                })
                break
            case data.Discovery:
                dataSet.Discovery.forEach(step => {
                    if (step.id === id) {
                        step.status = true
                    }
                })
                break
            case data.Delivery:
                dataSet.Delivery.forEach(step => {
                    if (step.id === id) {
                        step.status = true
                    }
                })
                break
            default:
                return apiCtrl.apiError(res, "Invalid Data")

        }
        return apiCtrl.apiSuccess(res, dataSet, "Updated Successfully !")
    }
}

function editTask(req : any, res : any) {

    const {id, taskhead, taskDescription} = req.body;

    if(taskhead && taskDescription && id) {
        switch (taskhead) {
            case data.Foundation:
                dataSet.Foundation.forEach(step => {
                    if (step.id === id) {
                        step.taskDescription = taskDescription;
                    }
                })
                break
            case data.Discovery:
                dataSet.Discovery.forEach(step => {
                    if (step.id === id) {
                        step.taskDescription = taskDescription;
                    }
                })
                break
            case data.Delivery:
                dataSet.Delivery.forEach(step => {
                    if (step.id === id) {
                        step.taskDescription = taskDescription;
                    }
                })
                break
            default:
                return apiCtrl.apiError(res, "Invalid Data")

        }

        return apiCtrl.apiSuccess(res, dataSet, "Updated Successfully !")

    } else {
        return apiCtrl.apiError(res, 'values are missing');
    }

}
