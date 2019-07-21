import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongratulationComponent } from './congratulation.component';

const routes: Routes = [
  { path: 'congratulation', component: CongratulationComponent }
];

export const congratulationModuleRoutes: ModuleWithProviders = RouterModule.forChild(routes);
