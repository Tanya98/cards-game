import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
    selector: 'app-congratulation',
    templateUrl: './congratulation.component.html',
    styleUrls: ['./congratulation.component.scss']
})

export class CongratulationComponent implements OnInit {

    public allInfo: User[] = [];
    public score: number;
    public users: User[] = [];

    constructor() { }

    ngOnInit() {
        this.allInfo = JSON.parse(localStorage.getItem('allInfo'));
        this.allInfo.forEach(user => {
          // debugger;
            if (user.timerPlaygroundFirst) {
               return this.score = user.timerPlaygroundFirst;
            }
            if (user.timerPlaygroundSecond) {
               return this.score = user.timerPlaygroundSecond;
            }
            if (user.timerPlaygroundThird) {
               return this.score = user.timerPlaygroundThird;
            }
        });
    }
}
