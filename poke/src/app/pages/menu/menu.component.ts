import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  pdfZoomedIn: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  togglePdfMenu() {
    this.pdfZoomedIn = !this.pdfZoomedIn;
  }
}
