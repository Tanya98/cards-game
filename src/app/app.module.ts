import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { LoginComponent } from './features/account/login/login.component';
import {HomepageComponent} from "./features/homepage/homepage.component";

@NgModule({
  declarations: [
    AppComponent,
    SecuredLayoutComponent,
    PublicLayoutComponent,
    StartPageComponent,
    NotFoundComponent,
    LoginComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    RoutingModule,
    LayoutModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
