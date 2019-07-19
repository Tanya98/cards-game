import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})

export class RatingComponent implements OnInit {

    public bestUsersNumber: number = 5;
    public bestUsers =[];
    public sortedUsers4x4: User[] = [];
    public sortedUsers6x6: User[] = [];
    public sortedUsers8x8: User[] = [];

    public allUsers: User[] = [];

    constructor() { }

    ngOnInit() {
        this.sortUsers();
    }

    sortUsers() {
        this.allUsers = JSON.parse(localStorage.getItem('allInfo'));
        console.log(this.allUsers);

        this.sortedUsers4x4 = [...this.allUsers].sort((a, b) => {
            this.bestUsers = this.sortedUsers4x4 = [];
            if ( a.timerPlaygroundFirst !== undefined && b.timerPlaygroundFirst !== undefined) {
              return a.timerPlaygroundFirst - b.timerPlaygroundFirst;
            }
        });

        this.bestUsers = this.sortedUsers4x4.slice(0,this.bestUsersNumber);

        this.sortedUsers6x6 = [...this.allUsers].sort((a, b) => {
            if (a.timerPlaygroundSecond !== undefined && b.timerPlaygroundFirst !== undefined) {
              return a.timerPlaygroundSecond - b.timerPlaygroundSecond;
            }
        });

      this.bestUsers = this.sortedUsers6x6.slice(0, this.bestUsersNumber);

        this.sortedUsers8x8 = [...this.allUsers].sort((a, b) => {
            if (a.timerPlaygroundThird !== undefined || b.timerPlaygroundThird !== undefined) {
                return a.timerPlaygroundThird - b.timerPlaygroundThird;
            }
        });

      this.bestUsers = this.sortedUsers8x8.slice(0, this.bestUsersNumber);
    }
}
