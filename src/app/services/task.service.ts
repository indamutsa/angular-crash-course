import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TASKS } from '../mock-tasks';
import { Task } from '../Task';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    // return this.http.get<Task[]>(this.apiUrl);
    return of(TASKS);
  }

  deleteTask(task: Task): Observable<Task> {
    // const url = `${this.apiUrl}/${task.id}`;
    // return this.http.delete<Task>(url);
    TASKS.filter((t) => t.id !== task.id);
    return of(task);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    // const url = `${this.apiUrl}/${task.id}`;
    // return this.http.put<Task>(url, task, httpOptions);
    TASKS.map((t) => (t.id === task.id ? task : t));
    return of(task);
  }

  addTask(task: Task): Observable<Task> {
    // return this.http.post<Task>(this.apiUrl, task, httpOptions);
    //
    TASKS.push(task);
    return of(task);
  }
}
