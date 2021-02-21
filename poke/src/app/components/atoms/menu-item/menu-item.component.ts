import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  elementId: string;
  link: string;
  @Input() title: string;
  @Input() set href(path: string) {
    switch (path) {
      case 'contact':
        this.elementId = 'contact';
      break;
      case 'order':
        this.link = '/order';
      break;
      case 'about':
        this.elementId = 'about';
      break;
      case 'menu':
        this.elementId = 'menu';
      break;
      case 'vacancies':
        this.elementId = 'vacancies';
      break;
    }
  }

  constructor() { }

  navigate() {
    if (this.elementId) {
      const element = document.getElementById(this.elementId);
      element.scrollIntoView({behavior:"smooth"});
    }
  }

  ngOnInit() {

  }
}
