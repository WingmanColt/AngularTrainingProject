import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TodoActivate } from './Resolvers/todo.activate';
import { TodoDeactivate } from './Resolvers/todo.deactivate';
import { TodoResolver } from './Resolvers/todo.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'list', component: ListComponent, resolve:[TodoResolver]/*, canActivate:[TodoActivate], canDeactivate:[TodoDeactivate]*/}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
