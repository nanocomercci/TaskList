import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import {from, Observable, of} from 'rxjs';
import {Task} from '../components/Task'
import {TASKS} from '../components/mock-task'

const httpOptions ={
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiURL ='http://localhost:5001/tasks'
  constructor(
    private http:HttpClient
  ) { }

  getTasks(): Observable<Task[]>  {
   return this.http.get<Task[]>(this.apiURL)
  }
  deleteTask(task:Task): Observable<Task>{
    const url =`${this.apiURL}/${task.id}`
    
    
    return this.http.delete<Task>(url)
  }
  updateTaskReminder(task:Task): Observable<Task>{
   const url =`${this.apiURL}/${task.id}`
   return this.http.put<Task>(url, task, httpOptions)

  }
  addTask(task:Task): Observable<Task>{
    
    return this.http.post<Task>(this.apiURL, task, httpOptions);
  }
}
