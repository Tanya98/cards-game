import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl, ValidationErrors} from "@angular/forms";

@Injectable({ providedIn: 'root' })

export class ValidatorService {

  constructor() { }

  validEmail({value}:FormControl):ValidationErrors|null {
    const valid = /(\w(=?@)\w+\.{1}[a-zA-Z]{2,})/i.test(value);
    if(!valid){
      return {message:"Incorrect Input"}
     }
     return null;
  }

  validPassword({value}:FormControl):ValidationErrors|null{
    const valid = Array.from(value);
    if(valid.length < 6){
      return { message:'More than 6' }
    }
    return null;
  }

}


