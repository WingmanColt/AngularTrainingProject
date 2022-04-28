import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map, scan, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos = [];
  constructor(private http: HttpClient) {

    
   /*
   // witch base interval
    const stream$ = new Observable((subscriber: Subscriber<number>) => {

      let counter = 0;
      const intervalId = setInterval(() => {
        subscriber.next(counter);
        counter++;
      }, 1000)
    
      //subscriber.error();
      //subscriber.complete();
      return () => {
        console.log("Inverval was cleared");
        clearInterval(intervalId);
      };
    });*/


    //stream$.subscribe(function() {}, function(err) {}, function() {});

   const stream$ = interval(1000);
   const subscription = stream$
    .pipe(
     take(5),
     map(value => value * 5), 
     scan((acc, curr) => {
      return acc + curr;
     }, 0)/*reducer (react)*/)
    .subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log("Stream Complated.");
      }
    });

   // subscription.unsubscribe();
   }

  fetchData(){
    return this.http.get<ITodo[]>('https://my-json-server.typicode.com/typicode/demo/posts');
	/*	.subscribe((val) => this.todos = val);*/
  }
  
	onKeyUpHandler(value: string){
		console.log(value);
	}

	addtodo(title: string){
		this.todos.push({ title, completed: false });
	}

	toggleCompleted(id: number){
		const currTodo = this.todos[id];
		this.todos[id] = {...currTodo, completed: !currTodo.completed};
	}
}
