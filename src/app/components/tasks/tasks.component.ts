import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../service/task.service';
import { Task } from '../Task';
import { HttpClient, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private takservice: TaskService) { }

  ngOnInit(): void {
    this.takservice.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(task: Task) {
    this.takservice
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.takservice.updateTaskReminder(task).subscribe();
  }
  addTask(task: Task) {
    this.takservice.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
