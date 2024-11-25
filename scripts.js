let tasks = [];
let selectedTaskType = '';

function selectTaskType(type) {
  selectedTaskType = type;
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "" || !selectedTaskType) {
    alert("Please provide a task and select a task type.");
    return;
  }

  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

  const newTask = {
    text: taskText,
    type: selectedTaskType,
    date: formattedDate,
  };

  tasks.push(newTask);
  taskInput.value = "";
  selectedTaskType = '';

  // Update task displays
  updateTaskList();
  updateScheduledTasks();
}

function updateTaskList() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.style.borderLeftColor = getTaskTypeColor(task.type);

    taskDiv.innerHTML = `
      <div class="task-line"></div>
      <div class="task-date">${task.date}</div>
      <div class="task-title">${task.text}</div>
    `;

    taskList.appendChild(taskDiv);
  });
}

function updateScheduledTasks() {
  const scheduledTasks = document.getElementById("scheduledTasks");
  scheduledTasks.innerHTML = "";

  tasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.style.borderLeftColor = getTaskTypeColor(task.type);

    taskDiv.innerHTML = `
      <div class="task-line"></div>
      <div class="task-date">${task.date}</div>
      <div class="task-title">${task.text}</div>
    `;

    scheduledTasks.appendChild(taskDiv);
  });
}

function getTaskTypeColor(type) {
  switch (type) {
    case 'Personal': return '#ff4f4f';
    case 'Freelance': return '#ffb94d';
    case 'Work': return '#4d94ff';
    default: return '#ccc';
  }
}

function showPage(page) {
  document.getElementById("today").style.display = page === "today" ? "block" : "none";
  document.getElementById("scheduled").style.display = page === "scheduled" ? "block" : "none";
}

function filterTasks(type) {
  const filteredTasks = tasks.filter(task => task.type === type);
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  filteredTasks.forEach((task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.style.borderLeftColor = getTaskTypeColor(task.type);

    taskDiv.innerHTML = `
      <div class="task-line"></div>
      <div class="task-date">${task.date}</div>
      <div class="task-title">${task.text}</div>
    `;

    taskList.appendChild(taskDiv);
  });
}

function openSettings() {
  document.getElementById("settingsModal").style.display = "flex";
}

function closeSettings() {
  document.getElementById("settingsModal").style.display = "none";
}
