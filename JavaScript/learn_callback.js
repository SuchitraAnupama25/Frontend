function completeTask(taskname, callback){
    console.log(`Working on ${taskname}`);
    console.log(`${taskname} completed`);
    callback();
}

function notifyManager(){
    console.log("Email sent to project manager");
}

completeTask("React Dashboard Development",notifyManager);