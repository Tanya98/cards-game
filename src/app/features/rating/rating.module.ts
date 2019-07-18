import { NgModule } from '@angular/core';
import { RatingComponent } from './rating.component';
import { CommonModule } from '@angular/common';
import { ratingModuleRoutes } from './rating.routig';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        ratingModuleRoutes
    ],
    exports: [],
    declarations: [RatingComponent],
    providers: [],
})
export class RatingModule { }
