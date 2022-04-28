import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

import { TodoModule } from './todo/todo.module';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { CustomIdValidatorDirective } from './custom-id-validator.directive';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    TodoItemComponent,
    HighlightDirective,
    LoginComponent,
    CustomIdValidatorDirective,
    RegisterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TodoModule,
    AppRoutingModule,
    CoreModule
  ],
  /*providers: [{
    provide: TodoService,
    useClass: TodoService
  }],*/
  bootstrap: [AppComponent]
})
export class AppModule { }
