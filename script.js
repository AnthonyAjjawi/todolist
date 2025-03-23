//access task-form, close-dialog, open-task-form btn

const taskForm = document.getElementById("task-form");
const close_Dialog = document.getElementById("confirm-close-dialog");
const open_Task_Btn = document.getElementById("open-task-form-btn");


//access close-task-form-btn, add-or-update-task-btn, cancel-btn
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("update-or-delete-task");
const cancelBtn = document.getElementById("cancel-btn");

//access discard btn, task-container, title-input
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("input");

//access date, description
const dateInput = document.getElementById("date");
const descriptionInput = document.getElementById("description");


//empty array 
const taskData = [];

//current object
let currentTask = {};


// toggle task form
open_Task_Btn.addEventListener("click", () => {
   taskForm.classList.toggle("hidden");
  
})

closeTaskFormBtn.addEventListener("click", () => {
   close_Dialog.showModal();
})