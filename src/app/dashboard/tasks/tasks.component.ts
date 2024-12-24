import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent {
  tasks: { title: string; description: string }[] = [];
  newTask = { title: '', description: '' };

  
  addTask() {
    if (this.newTask.title && this.newTask.description) {
      this.tasks.push({ ...this.newTask });
      this.newTask = { title: '', description: '' };
    }
  }

  
  editTask(index: number) {
    const task = this.tasks[index];
    this.newTask = { ...task };
    this.tasks.splice(index, 1);
  }

  
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
