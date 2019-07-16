import { NgModule } from '@angular/core';
import {LoginComponent} from './login.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {loginModuleRoutes} from './login.routing';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    loginModuleRoutes,
    ReactiveFormsModule,
  ],
    exports: [],
    declarations: [LoginComponent],
    providers: [],
})
export class LoginModule { }

