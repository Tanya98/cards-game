import {Component, OnInit} from '@angular/core';
import {CardsService} from "../../core/services/cards.service";
import {Observable} from "rxjs";
import {Card} from "../../core/models/card";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements  OnInit{
  public cards$:Observable<Card[]>;

  constructor(private cardsService: CardsService){
    this.cards$ = this.cardsService.cards$;
    // this.cards$.subscribe(v=> console.log(v));
  }

  ngOnInit(): void {
    this.cardsService.getAllCards();
  }


  selectCard(id1:number,id2:number) {
    if(id1===id2){
    this.cardsService.remove(id1);
     }
  }
}
