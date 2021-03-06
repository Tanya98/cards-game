import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent }
];

export const loginModuleRoutes: ModuleWithProviders = RouterModule.forChild(routes);
