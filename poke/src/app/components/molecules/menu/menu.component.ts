import {Component, Input, OnInit} from '@angular/core';
import {Menu} from "../../../types/Menu";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuItems: Menu[];

  constructor() {
  }

  ngOnInit() {
  }
}
