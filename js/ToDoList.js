const addTask = document.querySelector(".add-task");
const inputTask = document.getElementById("input-task");
const taskContainer = document.querySelector(".task-container");

addTask.addEventListener("click", function () {
  const taskDescription = inputTask.value.trim();

  if (taskDescription === "") {
    alert("Please enter a task");
    return;
  }

  const task = document.createElement("div");
  task.classList.add("task");

  const li = document.createElement("li");
  li.innerText = taskDescription;
  task.appendChild(li);

  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = `<i class="fa-solid fa-check"></i>`;
  checkBtn.classList.add("checktask");
  task.appendChild(checkBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteBtn.classList.add("deletetask");
  task.appendChild(deleteBtn);

  taskContainer.appendChild(task);
  inputTask.value = "";

  checkBtn.addEventListener("click", function () {
    task.style.textDecoration = "line-through";
  });

  deleteBtn.addEventListener("click", function (e) {
    e.target.parentElement.parentElement.remove();
  });
});
