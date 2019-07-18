import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})

export class RatingComponent implements OnInit {

    public bestUsers: number = 5;
    public bestCore4x4: number = 40;
    public bestCore6x6: number = 165;
    public bestCore8x8: number = 340;

    public sortedUsers4x4: User[] = [];
    public sortedUsers6x6: User[] = [];
    public sortedUsers8x8: User[] = [];

    public getUsers: User[] = [];
    public selectedUsers: User[] = [];
    public sortable: any = [];

    constructor() { }

    ngOnInit() {
        this.sortUsers();
    }

    sortUsers() {
        this.getUsers = JSON.parse(localStorage.getItem('allInfo'));
        console.log(this.getUsers);
        // this.selectedUsers = this.getUsers.slice(0, this.bestUsers);

        this.sortedUsers4x4 = this.getUsers.sort((a, b) => {
            // debugger;
            return a.timerPlaygroundFirst - b.timerPlaygroundFirst;
        });

        this.sortedUsers6x6 = this.getUsers.sort((a, b) => {
            debugger;
            if (typeof a.timerPlaygroundSecond !== 'undefined') {
                if (typeof b.timerPlaygroundFirst !== 'undefined') {
                    return a.timerPlaygroundSecond - b.timerPlaygroundSecond;
                }
            }
        });

        this.sortedUsers8x8 = this.getUsers.sort((a, b) => {
            if (a.timerPlaygroundThird !== undefined || b.timerPlaygroundThird !== undefined) {
                return a.timerPlaygroundThird - b.timerPlaygroundThird;
            }
        });
        // console.log(`First ${this.sortedUsers4x4}`);
        // console.log(`Second ${this.sortedUsers6x6}`);
        // console.log(`Third  ${this.sortedUsers8x8}`);

    }
}
