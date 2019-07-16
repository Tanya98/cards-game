import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms";
import {ValidatorService} from "../../../core/services/validator.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form;

  constructor(
    public formBuilder: FormBuilder,
    public validator: ValidatorService,
    public router: Router
    ) {

    this.form = this.formBuilder.group({
      email: ['',[Validators.required, this.validator.validEmail]],
      password:['',[Validators.required, this.validator.validPassword]]
    })
  }
      ngOnInit(): void {}

  goPlay(){
    this.router.navigate(['cardpage']);
  }
}
