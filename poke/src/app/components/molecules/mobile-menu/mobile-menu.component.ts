import {Component, Input, OnInit} from '@angular/core';
import {Menu} from "../../../types/Menu";

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {
  @Input() menuItems: Menu[];

  constructor() { }

  ngOnInit() {
  }

}
