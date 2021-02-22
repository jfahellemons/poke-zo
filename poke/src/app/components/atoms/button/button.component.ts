import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
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

  constructor() { }

  ngOnInit() {
  }

}
