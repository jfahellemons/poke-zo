import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  @Input() variant: 'small' | 'large';
  @Input() title: string;
  @Input() description: string;
  @Input() author: string;

  constructor() {
  }

  ngOnInit() {
  }

}
