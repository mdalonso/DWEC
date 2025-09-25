// Lógica de la Aplicación (app.js)
const taskRepo = new TaskRepository();

document.getElementById('addButton').addEventListener('click', () => {
  const taskInput = document.getElementById('taskInput');
  const taskDescription = taskInput.value.trim();

  if (taskDescription) {
    taskRepo.addTask(taskDescription);
    taskInput.value = ''; // Limpiar el input
    updateTaskList(); // Actualizar la lista de tareas
  }
});

function updateTaskList() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Limpiar la lista existente
  const tasks = taskRepo.getTasks(); // Obtener tareas del repositorio

  tasks.forEach((task) => {
    const listItem = document.createElement('li');
    listItem.textContent = task;
    taskList.appendChild(listItem);
  });
}
