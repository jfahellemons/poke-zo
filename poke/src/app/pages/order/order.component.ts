import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  urlBeijerLand: string;
  urlHellevoetsSluis: string;
  confirmationText: string;

  constructor() {
  }

  ngOnInit() {
  }

  hasServiceSelected(): boolean {
    return this.urlHellevoetsSluis !== undefined || this.urlBeijerLand !== undefined;
  }

  setDeliver() {
    this.confirmationText = "Bezorgen";
    this.urlBeijerLand = "https://pokenzobezorg.sitedish.shop/";
    this.urlHellevoetsSluis = "https://pokeenzohellevoetsluis.sitedish.shop/";
  }

  setPickup() {
    this.confirmationText = "Afhalen";
    this.urlHellevoetsSluis = "https://pokeenzohellevoetsluis.sitedish.shop/";
    this.urlBeijerLand = "https://pokeenzoafhaal.sitedish.shop/";
  }
}
