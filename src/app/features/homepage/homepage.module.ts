import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {HomepageComponent} from "./homepage.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {homepageModuleRoutes} from "./homepage.routing";
import {StoreModule} from "@ngrx/store";
import {homepageReducer, HomePageState} from "./store/reducers/homepage.reducer";
import {EffectsModule} from "@ngrx/effects";
import {HomepageEffect} from "./store/effects/homepage.effect";

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
      homepageModuleRoutes,
      StoreModule.forFeature('homepage', homepageReducer),
      EffectsModule.forFeature([HomepageEffect]),
    ],
    exports: [],
    declarations: [HomepageComponent],
    providers: [],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class HomepageModule { }
