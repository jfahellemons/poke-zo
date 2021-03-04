import {Component, OnInit} from '@angular/core';
import {Menu} from "../../../types/Menu";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: Menu[];
  isToggled: boolean;
  iconSrc = '../../../../assets/icons/hamburger.png';

  constructor() {
  }

  ngOnInit() {
    this.menuItems = this.getMenuItems();
  }

  toggleIcon() {
    this.isToggled = !this.isToggled;
    if (this.isToggled) {
      this.iconSrc = '../../../../assets/icons/close.png'
    } else {
      this.iconSrc = '../../../../assets/icons/hamburger.png'
    }
  }

  private getMenuItems() {
    const menuItems: Array<Menu> = [
      {title: "online bestellen", href: "/bestellen"},
      {title: "ons verhaal", href: "about"},
      {title: "menu", href: "menu"},
      {title: "contact", href: "contact"},
      {title: "vacatures", href: "vacancies"}
    ];
    return menuItems;
  }
}
