import {Component, Input, OnInit} from '@angular/core';
import {navigateTo} from "../../../utils/navigationUtils";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  elementId: string;
  link: string;
  @Input() title: string;
  @Input() href: string;

  constructor() { }

  navigate() {
    navigateTo(this.href);
    // if (this.elementId) {
    //   const element = document.getElementById(this.elementId);
    //   element.scrollIntoView({behavior:"smooth"});
    // }
  }

  ngOnInit() {

  }
}
