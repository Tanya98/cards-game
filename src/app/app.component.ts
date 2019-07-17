import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'game';
  public allInfo = [];
  ngOnInit(){
    let allInfo = JSON.stringify(this.allInfo);
    localStorage.setItem('allInfo',allInfo);
  }
}
