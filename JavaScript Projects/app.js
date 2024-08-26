//  1. select the form element and get it's text value
//  2. create a div and use the value to create a div
//  3. add a delete button to the new div
//  4. append that div in the todo list container div
//  5. make that item dissapear if the delete button is clicked
const addTask = document.getElementById("add-task");
const listContainer = document.getElementById("list-container");
//selecting the form submit button and list container

addTask.addEventListener("click", () => {
    const task = document.getElementById("task") //input value
    // const taskTest = task.value;

    let newTask = document.createElement("div");
    newTask.innerHTML = `<p> ${task.value} </p>`;
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "DELETE";
    newTask.append(deleteButton); //adding thr delete button
    // creating the task element with its div inside it a paragraph and button
    
    listContainer.append(newTask); //add the full task items inside the container
    
    task.value = ""; //clearing the form
})