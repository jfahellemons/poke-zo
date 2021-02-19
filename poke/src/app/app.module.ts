import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuItemComponent } from './components/atoms/menu-item/menu-item.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { FooterItemComponent } from './components/atoms/footer-item/footer-item.component';
import { OrderButtonComponent } from './components/atoms/order-button/order-button.component';
import { SocialMediaIconComponent } from './components/atoms/social-media-icon/social-media-icon.component';
import { MenuComponent } from './components/molecules/menu/menu.component';
import { FooterMenuComponent } from './components/molecules/footer-menu/footer-menu.component';
import { MobileMenuComponent } from './components/molecules/mobile-menu/mobile-menu.component';
import { PdfMenuComponent } from './components/molecules/pdf-menu/pdf-menu.component';
import { MapsComponent } from './components/molecules/maps/maps.component';
import { HeaderComponent } from './components/organisms/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuItemComponent,
    LogoComponent,
    FooterItemComponent,
    OrderButtonComponent,
    SocialMediaIconComponent,
    MenuComponent,
    FooterMenuComponent,
    MobileMenuComponent,
    PdfMenuComponent,
    MapsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
