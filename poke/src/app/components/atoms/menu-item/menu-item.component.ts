import {Component, Input, OnInit} from '@angular/core';
import {navigateTo} from "../../../utils/navigationUtils";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  link: string;
  @Input() title: string;
  @Input() href: string;

  constructor() { }

  navigate() {
    navigateTo(this.href);
  }

  ngOnInit() {

  }

  isLink(): boolean {
    return this.href.indexOf("/") !== -1
  }
}
