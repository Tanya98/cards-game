import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartPageComponent } from 'src/app/shared/start-page/start-page.component';
import { NotFoundComponent } from 'src/app/shared/not-found';

const routes: Routes = [
    {
        path: '',
        component: StartPageComponent,
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
