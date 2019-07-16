import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-start-page',
    templateUrl: './start-page.component.html',
    styleUrls: ['./start-page.component.scss']
})

export class StartPageComponent implements OnInit {
    constructor(public router: Router ) { }

    ngOnInit() { }

   public getStarted() {
      this.router.navigate(['login']);
  }
}
