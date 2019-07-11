import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './api/in-memory-data.service';

@NgModule({
    imports: [
        HttpClientModule,
       InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    exports: [HttpClientModule],
    providers: [InMemoryDataService],
})
export class HttpModule { }
