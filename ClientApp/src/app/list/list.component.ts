import { Component, ElementRef, AfterViewInit, ViewChild, DoCheck } from '@angular/core';
import { ITodo } from '../Interfaces';
import { TodoService } from '../Services/todo.service';
import { fromEvent } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-list',
	templateUrl: 'list.component.html'
})

export class ListComponent implements AfterViewInit, DoCheck {

	@ViewChild('filterInput', { static: false }) filterInput: ElementRef;
	@ViewChild('textInput', { static: false }) textInput: ElementRef;

	todos: ITodo[];
	todos2: ITodo[];
	constructor(private todoService: TodoService, private activatedRoute: ActivatedRoute){
		// Fetching from service 
		todoService.fetchData();

		// with resolver
		this.todos2 = this.activatedRoute.snapshot.data[0];
	}
	ngDoCheck(){
		this.todos = this.todoService.todos;
	}

	ngAfterViewInit(){
		const stram$  = fromEvent(this.filterInput.nativeElement, 'keyup' /*jot down which key is presse*/).pipe(
			debounceTime(1000),  /*wait 1 sec before printing the value (against overflow)*/
			map(() => this.filterInput.nativeElement.value), /*write down whole text in input*/
			tap((value) => console.log(value)) // Listen on stream
		);
		/*.subscribe((e) => { //Do all action here 
			console.log(e);
		});*/

		stram$.subscribe((val) => console.log('1', val));

		// You can do same action twice
		//stram$.subscribe((val) => console.log('2', val));
		}

	onKeyUpHandler(value: string){
		this.todoService.onKeyUpHandler(value);
	}

	addtodo(title: string){
		this.todoService.addtodo(title);
	}

	toggleCompleted(id: number){
		this.todoService.toggleCompleted(id);
	}
	
	currentValue = 0;

	changeHandler(e: any) {
		this.currentValue = +e.target.value;
	}
}