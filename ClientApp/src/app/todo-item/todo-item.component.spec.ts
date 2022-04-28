import { TestBed, inject } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';

describe('a todo-item component', () => {
	let component: TodoItemComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TodoItemComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([TodoItemComponent], (TodoItemComponent) => {
		component = TodoItemComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});