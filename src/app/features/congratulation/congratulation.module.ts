import { NgModule } from '@angular/core';
import { CongratulationComponent } from './congratulation.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { congratulationModuleRoutes } from './congratulation.routing';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        congratulationModuleRoutes
    ],
    exports: [],
    declarations: [CongratulationComponent],
    providers: [],
})
export class CongratulationModule { }
