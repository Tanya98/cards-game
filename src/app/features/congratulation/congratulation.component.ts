import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
    selector: 'app-congratulation',
    templateUrl: './congratulation.component.html',
    styleUrls: ['./congratulation.component.scss']
})

export class CongratulationComponent implements OnInit {

    public user: User;
    public score: number;

    constructor() { }

    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('userInfo'));
        if (this.user.timerPlaygroundFirst) {
            this.score = this.user.timerPlaygroundFirst;
            delete this.user.timerPlaygroundFirst;
            const updatedUser = JSON.stringify(this.user);
            localStorage.setItem('userInfo', updatedUser);
        }

        if (this.user.timerPlaygroundSecond) {
            this.score = this.user.timerPlaygroundSecond;
            delete this.user.timerPlaygroundSecond;
            const updatedUser = JSON.stringify(this.user);
            localStorage.setItem('userInfo', updatedUser);
        }

        if (this.user.timerPlaygroundThird) {
            this.score = this.user.timerPlaygroundThird;
            delete this.user.timerPlaygroundThird;
            const updatedUser = JSON.stringify(this.user);
            localStorage.setItem('userInfo', updatedUser);
        }
    }
}
