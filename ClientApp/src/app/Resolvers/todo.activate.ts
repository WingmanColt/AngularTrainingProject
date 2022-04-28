import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ITodo } from '../Interfaces';
import { TodoService } from '../Services/todo.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoActivate implements CanActivate {
  constructor(private todoService: TodoService) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  return true;
  }
  
}
