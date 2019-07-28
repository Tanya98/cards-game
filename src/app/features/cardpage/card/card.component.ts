import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable, Subject } from 'rxjs';
import { Card } from 'src/app/core/models/card';
import { CardsService } from 'src/app/core/services/cards.service';
import { Router } from '@angular/router';
import { tap, filter } from 'rxjs/operators';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit, OnDestroy {
    public cards$: Observable<Card[]>;
    public selectedCards$: Observable<Card[]>;
    public cards: Card[];
    public activeCard: Card;
    public hasFlippedCard: boolean = false;
    public timer: number = 0;
    public stream: Observable<any>;
    public currentMode: number;
    public timerSubscription: Subscription;
    public cardsSubscription: Subscription;
    public selectedCardsSubscription: Subscription;
    public stopPlay$: Subject<any> = new Subject();
    public _4X4: number = 4; // 16
    public _6X6: number = 6; // 36
    public _8X8: number = 8; // 64
    public cellWidth: number = 130;
    public playgroundSize: number = 4;

    constructor(private cardsService: CardsService, private router: Router) {
        this.cards$ = this.cardsService.cards$;
        this.selectedCards$ = this.cardsService.selectedCard$;
        this.cardsSubscription = this.cards$.pipe(
            tap((cards) => {
                this.cards = cards;
                this.shuffle(this.cards);
                if (!this.cards.length) {
                    // this.stopTimer();
                }
            })
        ).subscribe();
    }

    ngOnInit() {
        this.cardsService.getCards(this._4X4 * this._4X4);
        // this.changeMode();
        this.currentMode = this._4X4;

        this.selectedCardsSubscription = this.selectedCards$.pipe(
            filter(sl => !!sl[0] && !!sl[1])
        ).subscribe(sl => {
            if (sl[0].pairId === sl[1].pairId && sl[0].id !== sl[1].id) {
                return this.cardsService.deleteCards();
            } else {
                return this.cardsService.clear();
            }
        });
    }
    shuffle(cards) {
        cards.sort(() => Math.random() - 0.5);
    }

    selectCard(card: Card) {
        setTimeout(() => {
            return this.cardsService.selectedCard(card);
        }, 700);
    }

    changeModeEventHandler(mode: number) {
        this.currentMode = mode;
        this.playgroundSize = mode;
        this.cardsService.getCards(mode * mode);
        // this.changeMode();
    }

    // changeMode() {
    //     this.stopTimer();
    //     this.countTicks();
    //     this.startTimer();
    // }

    addClass(card) {
        this.activeCard = card;
    }
    ngOnDestroy() {
        this.cardsSubscription.unsubscribe();
        this.selectedCardsSubscription.unsubscribe();
    }
}