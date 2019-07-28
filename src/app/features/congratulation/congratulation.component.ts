import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
    selector: 'app-congratulation',
    templateUrl: './congratulation.component.html',
    styleUrls: ['./congratulation.component.scss']
})

export class CongratulationComponent implements OnInit {

    public user: User;
    public allInfo: User[] = JSON.parse(localStorage.getItem('allInfo'));
    public score: number;

    constructor() { }

    ngOnInit() {
        this.addUser();
        this.user = JSON.parse(localStorage.getItem('userInfo'));
        if (this.user.timerPlaygroundFirst) {
            this.score = this.user.timerPlaygroundFirst;

            this.allInfo.forEach(u => {
                if (u.timerPlaygroundFirst && u.email === this.user.email) {
                    u.timerPlaygroundFirst = this.score;
                    const updatedInfo = JSON.stringify(this.allInfo);
                    localStorage.setItem('allInfo', updatedInfo);
                }
            });

            delete this.user.timerPlaygroundFirst;
            const updatedUser = JSON.stringify(this.user);
            localStorage.setItem('userInfo', updatedUser);
        }

        if (this.user.timerPlaygroundSecond) {
            this.score = this.user.timerPlaygroundSecond;

            this.allInfo.forEach(u => {
                if (u.timerPlaygroundSecond && u.email === this.user.email) {
                    u.timerPlaygroundSecond = this.score;
                    const updatedInfo = JSON.stringify(this.allInfo);
                    localStorage.setItem('allInfo', updatedInfo);
                }
            });

            delete this.user.timerPlaygroundSecond;
            const updatedUser = JSON.stringify(this.user);
            localStorage.setItem('userInfo', updatedUser);
        }

        if (this.user.timerPlaygroundThird) {
            this.score = this.user.timerPlaygroundThird;

            this.allInfo.forEach(u => {
                if (u.timerPlaygroundThird && u.email === this.user.email) {
                    u.timerPlaygroundThird = this.score;
                    const updatedInfo = JSON.stringify(this.allInfo);
                    localStorage.setItem('allInfo', updatedInfo);
                }
            });

            delete this.user.timerPlaygroundThird;
            const updatedUser = JSON.stringify(this.user);
            localStorage.setItem('userInfo', updatedUser);
        }
    }

    addUser() {
        const getUser: User = JSON.parse(localStorage.getItem('userInfo'));
        const getAllInfo = JSON.parse(localStorage.getItem('allInfo'));

        if (getAllInfo.length === 0 && getUser.timerPlaygroundFirst ||
            getAllInfo.length === 0 && getUser.timerPlaygroundSecond ||
            getAllInfo.length === 0 && getUser.timerPlaygroundThird) {
            getAllInfo.push(getUser);
            const newInfo = JSON.stringify(getAllInfo);
            localStorage.setItem('allInfo', newInfo);
        }

        getAllInfo.some(user => {
            if (user.email === getUser.email) {
                if (getUser.timerPlaygroundFirst) {
                    user.timerPlaygroundFirst = getUser.timerPlaygroundFirst;
                    const newUser = JSON.stringify(getAllInfo);
                    localStorage.setItem('allInfo', newUser);
                }
                if (getUser.timerPlaygroundSecond) {
                    user.timerPlaygroundSecond = getUser.timerPlaygroundSecond;
                    const newUser = JSON.stringify(getAllInfo);
                    localStorage.setItem('allInfo', newUser);
                }
                if (getUser.timerPlaygroundThird) {
                    user.timerPlaygroundThird = getUser.timerPlaygroundThird;
                    const newUser = JSON.stringify(getAllInfo);
                    localStorage.setItem('allInfo', newUser);
                }
            }
            if (user.email !== getUser.email) {
                getAllInfo.push(getUser);
                const newUser = JSON.stringify(getAllInfo);
                localStorage.setItem('allInfo', newUser);
            }
        });
    }
}
