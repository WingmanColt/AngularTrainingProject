import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ITodo } from '../Interfaces';
import { TodoService } from '../Services/todo.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<ITodo[]> {

  constructor(private todoService: TodoService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return this.todoService.fetchData().pipe(tap((entity) => {
    console.log(entity);
    debugger;
  }));
  }
  
}
