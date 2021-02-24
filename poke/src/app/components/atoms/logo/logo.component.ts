import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
  @Input() logoVariant: 'white' | 'dark';
  imgSrc: string;
  isDarkLogo: boolean;

  constructor() {
  }

  ngOnInit() {
    this.imgSrc = this.getImgSrc();
  }

  private getImgSrc() {
    if (this.logoVariant == 'white') {
      return "../../../../assets/logos/logo_white.svg"
    } else {
      this.isDarkLogo = true;
      return "../../../../assets/logos/logo_black.svg"
    }
  }
}
