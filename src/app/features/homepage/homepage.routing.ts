import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from "./homepage.component";

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent }
];

export const homepageModuleRoutes: ModuleWithProviders = RouterModule.forChild(routes)
