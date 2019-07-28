import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import { cardModuleRoutes } from './card.routing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CardpageEffect } from '../store/effects/cardpage.effect';
import { cardpageReducer } from '../store/reducers/cardpage.reducer';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        cardModuleRoutes,
        StoreModule.forFeature('cardpage', cardpageReducer),
        EffectsModule.forFeature([CardpageEffect]),
    ],
    exports: [CardComponent],
    declarations: [CardComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardModule { }
