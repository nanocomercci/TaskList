import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {from, Observable, of} from 'rxjs';
import {Task} from '../components/Task'
import {TASKS} from '../components/mock-task'
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
}
