import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CardpageEffect } from './store/effects/cardpage.effect';
import { cardpageModuleRoutes } from './cardpage.routing';
import { CardpageComponent } from './cardpage.component';
import { cardpageReducer } from './store/reducers/cardpage.reducer';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    cardpageModuleRoutes,
    StoreModule.forFeature('cardpage', cardpageReducer),
    EffectsModule.forFeature([CardpageEffect]),
  ],
  exports: [],
  declarations: [CardpageComponent],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardpageModule { }
