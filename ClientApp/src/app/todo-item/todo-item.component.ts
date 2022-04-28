import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../Interfaces';

@Component({
	selector: 'todo-item',
	templateUrl: 'todo-item.component.html'
})

export class TodoItemComponent implements OnInit {

	@Input() todo: ITodo;
	@Output() toggle: EventEmitter<void> = new EventEmitter(); 
	constructor() {}

	onKeyUpHandler(value: string){
		console.log(value);
	}

	toggleCompleted(){
		this.toggle.emit();
	}

	ngOnInit() { }
}