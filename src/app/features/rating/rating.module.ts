import { NgModule } from '@angular/core';
import { RatingComponent } from './rating.component';
import { CommonModule } from '@angular/common';
import { ratingModuleRoutes } from './rating.routig';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import {MatListModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ratingModuleRoutes,
    MatListModule
  ],
    exports: [],
    declarations: [RatingComponent],
    providers: [],
})
export class RatingModule { }
