import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';
import { CustomIdValidatorFn } from './custom-id-validator-fn';

@Directive({
  selector: '[appCustomIdValidator]',
  providers: [ // 
    {
    provide: NG_VALIDATORS, // connected with all validators
    useExisting:CustomIdValidatorDirective, // Add some extra logic to angular`s validation method
    multi: true 
  }]
})
export class CustomIdValidatorDirective implements Validator {

  validate(control: AbstractControl) {
    return CustomIdValidatorFn(control); 
  }

}
