import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingComponent } from './rating.component';

const routes: Routes = [
  { path: 'rating', component: RatingComponent }
];

export const ratingModuleRoutes: ModuleWithProviders = RouterModule.forChild(routes);