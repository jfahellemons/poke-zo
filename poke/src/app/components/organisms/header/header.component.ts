import {Component, OnInit} from '@angular/core';
import {Menu} from "../../../types/Menu";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: Menu[];
  private isToggled: boolean;
  private iconSrc = '../../../../assets/icons/hamburger.png';

  constructor() {
  }

  ngOnInit() {
    this.menuItems = this.getMenuItems();
  }

  private toggleIcon() {
    this.isToggled = !this.isToggled;
    if (this.isToggled) {
      this.iconSrc = '../../../../assets/icons/close.png'
    } else {
      this.iconSrc = '../../../../assets/icons/hamburger.png'
    }
  }

  private getMenuItems() {
    const menuItems: Array<Menu> = [
        {title: "online bestellen", href: "/order"},
        {title: "ons verhaal", href: "about"},
        {title: "menu", href: "menu"},
        {title: "contact", href: "contact"},
        {title: "vacatures", href: "vacancies"}
      ];
    return menuItems;
  }
}
