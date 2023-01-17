# plotify-assessment

To run the application 
npm run dev

to run the tests 
npm run test


/progress/getAllTasks
return all the tasks

/progress/createTask
created new task 

json body for new task {
    "taskhead":"Foundation",
    "taskDescription":"hello world"
}
task head can be Foundation, Discovery and Delivery


/progress/completeTask
complete task will update status of existing task: ture -> done and false -> incomplete
json body
{
    "taskhead":"Discovery",
    "id":1
}


/progress/editTask
edit task will edit name of the task 
json body
{
    "taskhead":"Foundation",
    "taskDescription":"hello world1",
    "id":1
}