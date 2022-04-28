import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomIdValidatorFn } from '../custom-id-validator-fn';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  
  constructor() { 
    this.buildForm();
  }

  buildForm() {
    this.form = new FormGroup({
      id: new FormControl(null, [CustomIdValidatorFn]),
      email: new FormControl('TestEmail', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.min(2)])
    });
  }

  get emailControl(){
    return this.form.get('email');
  }
  get IdControl(){
    return this.form.get('id');
  }

  ngOnInit() {
  }

}
