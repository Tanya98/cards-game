import {Action} from "@ngrx/store";
import {Card} from "../../../../core/models/card";

export const GET_ALL_CARDS = 'Card[], Get All Cards';
export const SET_ALL_CARDS = 'Card[], Set All Cards';
export const REMOVE_TWO_CARDS = 'Card[], Select Two Cards';

export class GetallCards implements Action{
  readonly  type = GET_ALL_CARDS;
  constructor(){}
}

export class SetallCards implements Action{
  readonly  type = SET_ALL_CARDS;
  constructor(public payload: Card[]){}
}

export class RemoveTwoCards implements Action{
  readonly  type = REMOVE_TWO_CARDS;
  constructor(public payload: number){}
}

export type Action = GetallCards | SetallCards | RemoveTwoCards;
