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

    constructor() { }

    ngOnInit() {
        this.allInfo = JSON.parse(localStorage.getItem('userInfo'));
        this.allInfo.forEach(user => {
            if (user.timerPlaygroundFirst) {
                this.score = user.timerPlaygroundFirst;
            }

            else if (user.timerPlaygroundSecond) {
                this.score = user.timerPlaygroundSecond;
            }

            else if (user.timerPlaygroundThird) {
              this.score = user.timerPlaygroundThird;
            }
        });

    }
}
