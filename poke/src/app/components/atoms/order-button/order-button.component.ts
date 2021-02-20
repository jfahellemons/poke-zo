import { Component, OnInit } from '@angular/core';
import CircleType from 'circletype';

@Component({
  selector: 'app-order-button',
  templateUrl: './order-button.component.html',
  styleUrls: ['./order-button.component.scss']
})
export class OrderButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const circleType = new CircleType(document.getElementById('order-button'));
  }
}
