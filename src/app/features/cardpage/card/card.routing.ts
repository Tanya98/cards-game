import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'card' },
  { path: 'card', component: CardComponent }
];

export const cardModuleRoutes: ModuleWithProviders = RouterModule.forChild(routes);
