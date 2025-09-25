// Repositorio (repository.js)
class TaskRepository {
    constructor() {
      this.tasks = []; // Almacena las tareas
    }
  
    // Método para agregar una nueva tarea
    addTask(taskDescription) {
      this.tasks.push(taskDescription);
    }
  
    // Método para obtener todas las tareas
    getTasks() {
      return this.tasks;
    }
  }
  