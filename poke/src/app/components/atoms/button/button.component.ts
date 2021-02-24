import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({opacity: 0}),
        animate(500, style({opacity: 1}))
      ]),
      transition(':leave', [   // :leave is alias to '* => void'
        animate(500, style({opacity: 0}))
      ])
    ])
  ]
})
export class ButtonComponent implements OnInit {
  variantClass: string;
  @Input() href: string;
  @Input() target: string;
  @Input() name: string;

  @Input() set variant(variant: 'green' | 'black' | 'whiteDark' | 'whiteGreen') {
    switch (variant) {
      case 'black':
        this.variantClass = 'button black';
        break;
      case "green":
        this.variantClass = 'button green';
        break;
      case "whiteDark":
        this.variantClass = 'button white-dark';
        break;
      case "whiteGreen":
        this.variantClass = 'button white-green';
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

  hasHref(): boolean {
    return this.href !== undefined;
  }
}
