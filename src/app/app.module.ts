import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from './core/routing/routing.module';
import { environment } from 'src/environments/environment';
import { LayoutModule } from '@angular/cdk/layout';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SecuredLayoutComponent } from './shared/layout/secured-layout';
import { PublicLayoutComponent } from './shared/layout/public-layout';
import { NotFoundComponent } from './shared/not-found';
import { StartPageComponent } from './shared/start-page/start-page.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NebularModule } from './shared/nebular/nebular.module';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store';
import { EffectsModule } from '@ngrx/effects';
import { HttpModule } from './core/http/http.module';
import { CardsService } from './core/services/cards.service';
import { LoginModule } from './features/account/login/login.module';
import { ValidatorService } from './core/services/validator.service';
import { RatingModule } from './features/rating/rating.module';
import { CongratulationModule } from './features/congratulation/congratulation.module';

@NgModule({
  declarations: [
    AppComponent,
    SecuredLayoutComponent,
    PublicLayoutComponent,
    StartPageComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    RoutingModule,
    LayoutModule,
    HttpModule,
    LoginModule,
    RatingModule,
    CongratulationModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forRoot(rootReducer()),
    EffectsModule.forRoot([]),
    NoopAnimationsModule,
    NebularModule
  ],
  providers: [CardsService, ValidatorService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
