import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Menu} from "../../../types/Menu";

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  @Output() onClickMenuItem = new EventEmitter<void>();
  @Input() menuItems: Menu[];

  constructor() {
  }

  ngOnInit() {
  }

  menuItemClicked() {
    this.onClickMenuItem.emit();
  }

}
