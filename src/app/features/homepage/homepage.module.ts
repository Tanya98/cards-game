import { NgModule } from '@angular/core';
import {HomepageComponent} from "./homepage.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {homepageModuleRoutes} from "./homepage.routing";

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      homepageModuleRoutes,
    ],
    exports: [],
    declarations: [HomepageComponent],
    providers: [],
})
export class HomepageModule { }
