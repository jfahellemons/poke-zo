import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-media-icon',
  templateUrl: './social-media-icon.component.html',
  styleUrls: ['./social-media-icon.component.scss']
})
export class SocialMediaIconComponent implements OnInit {
  href: string;
  iconSrc: string;
  alt: string;

  @Input() set type(socialMediaType: string) {
    switch (socialMediaType) {
      case 'facebook' :
        this.href = 'https://www.facebook.com/pages/category/Restaurant/Pok%C3%A9Zo-112185297196453/';
        this.iconSrc = '../../../assets/icons/icon_facebook.svg';
        this.alt = 'facebook';
        break;
      case 'instagram' :
        this.href = 'https://www.instagram.com/tokonoetiebrielle/';
        this.iconSrc = '../../../assets/icons/icon_instagram.svg';
        this.alt = 'instagram';
        break;
    }
  }

  constructor() {
  }

  ngOnInit() {
  }

}
