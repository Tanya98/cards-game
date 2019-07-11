import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NotFoundComponent } from '../not-found';
import { SecuredLayoutComponent } from './secured-layout';
import { PublicLayoutComponent } from './public-layout';
import { StartPageComponent } from '../start-page/start-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule,
    ],
    declarations: [
        // SecuredLayoutComponent,
        // PublicLayoutComponent,
        // StartPageComponent,
        // NotFoundComponent,
    ],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LayoutModule { }
