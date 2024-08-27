const addTask = document.getElementById("add-task");
const listContainer = document.getElementById("list-container");
//selecting the form submit button and list container

const task = document.getElementById("task") //input value


addTask.addEventListener("click", createTask);


function createTask() {
    if (task.value !== "" && task.value !== " ") {
        let newTask = document.createElement("div"); 
        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "DELETE";
        newTask.innerHTML = `<p> ${task.value} </p>`; 
        newTask.append(deleteButton)            // creating the task element with its div inside it a paragraph and button
        listContainer.append(newTask);           //add the full task items inside the container
                               //clearing the form
       
        //deleting functionality
        deleteButton.addEventListener("click", ()=>{ //checking when the delete task button is clicked
                while (newTask.hasChildNodes()) { 
                    newTask.removeChild(newTask.firstChild);
            
                  }
                  newTask.style.display = "none"; //displaying as none to avoid any glitches
            })
    }
    task.value = ""; 
    
}
