import {Component, Input, OnInit} from '@angular/core';
import {isHref, navigateTo} from "../../../utils/navigationUtils";

@Component({
  selector: 'app-footer-item',
  templateUrl: './footer-item.component.html',
  styleUrls: ['./footer-item.component.scss']
})
export class FooterItemComponent implements OnInit {
  @Input() title: string;
  @Input() href: string;

  constructor() {
  }

  ngOnInit() {
  }

  isLink(): boolean {
    return isHref(this.href);
  }

  navigate() {
    navigateTo(this.href);
  }
}
