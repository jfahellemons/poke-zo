import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import CircleType from 'circletype';

@Component({
  selector: 'app-order-button',
  templateUrl: './order-button.component.html',
  styleUrls: ['./order-button.component.scss']
})
export class OrderButtonComponent implements AfterViewInit {
  @Input() textId: string;

  constructor() {

  }

  ngAfterViewInit(): void {
    const circleType = new CircleType(document.getElementById(this.textId));
  }
}
