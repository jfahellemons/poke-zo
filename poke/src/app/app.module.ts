import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import { HomeComponent } from './pages/home/home.component';
import { QuoteComponent } from './components/organisms/quote/quote.component';
import { MenuComponent as MenuPage} from './pages/menu/menu.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ContactComponent } from './pages/contact/contact.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ContactInfoComponent } from './components/molecules/contact-info/contact-info.component';
import { VacanciesComponent } from './pages/vacancies/vacancies.component';
import { ButtonComponent } from './components/atoms/button/button.component'
import {VacancyContactComponent} from "./components/molecules/vacancy-contact/vacancy-contact.component";
import { FooterComponent } from './components/organism/footer/footer.component';
import { OrderComponent } from './pages/order/order.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MainComponent } from './pages/main/main.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'order', component: OrderComponent },
];

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
    HeaderComponent,
    HomeComponent,
    QuoteComponent,
    MenuPage,
    ContactComponent,
    ContactInfoComponent,
    VacanciesComponent,
    VacancyContactComponent,
    ButtonComponent,
    VacancyContactComponent,
    FooterComponent,
    OrderComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    GoogleMapsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
