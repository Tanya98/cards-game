import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardpageComponent } from './cardpage.component';

const routes: Routes = [
  { path: 'cardpage', component: CardpageComponent }
];

export const cardpageModuleRoutes: ModuleWithProviders = RouterModule.forChild(routes);
