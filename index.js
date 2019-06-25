// Arrays to keep track of each task's state
const taskTitles = [];
const taskComplete = [];
const taskDescription = [];


function newTask(title, description) {
  const task = {
  title: title,
  description: description,
  complete: false,
  logTaskState: function(){
    console.log(`${this.title} (${this.description}) has${this.complete ? " " : " not "}been completed`)
  },
  completeTask: function(){
    this.complete = true;
  }
  };
  return task;
}

task1 = newTask("Clean Cat Litter", "Remove dirt from sand"); // task 0
task2 = newTask("Do Laundry", ":)"); 
tasks = [task1, task2]


task1.logTaskState(); 
task1.completeTask();
task1.logTaskState(); 