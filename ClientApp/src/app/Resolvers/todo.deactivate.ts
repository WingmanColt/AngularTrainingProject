import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { ListComponent } from '../list/list.component';
import { TodoService } from '../Services/todo.service';

@Injectable({
  providedIn: 'root'
})
export class TodoDeactivate implements CanDeactivate<ListComponent> {
  constructor(private todoService: TodoService) { }
  canDeactivate(component: ListComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot) {
  return component.textInput.nativeElement.value.lenght === 0;
  }
  
}
