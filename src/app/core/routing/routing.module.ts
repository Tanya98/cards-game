import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from 'src/app/shared/start-page/start-page.component';
import { NotFoundComponent } from 'src/app/shared/not-found';
import {PublicLayoutComponent} from "../../shared/layout/public-layout";
// import {homepageModuleRoutes} from "../../features/homepage/homepage.routing";

const routes: Routes = [
    {
        path: '',
        component: StartPageComponent,
    },
  {
    path: '',
    component: PublicLayoutComponent,
    children:[
      {
        path: '',
        loadChildren: () => import('../../features/homepage/homepage.module').then(m => m.HomepageModule)
      },
    ]
  },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class RoutingModule { }
