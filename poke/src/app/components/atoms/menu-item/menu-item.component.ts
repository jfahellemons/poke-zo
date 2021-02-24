import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {isHref, navigateTo} from "../../../utils/navigationUtils";

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  link: string;
  @Input() title: string;
  @Input() href: string;
  @Output() clickEvent = new EventEmitter<void>();

  constructor() {
  }

  navigate() {
    this.onClick();
    navigateTo(this.href);
  }

  ngOnInit() {

  }

  onClick() {
    this.clickEvent.emit();
  }

  isLink(): boolean {
    return isHref(this.href);
  }
}
