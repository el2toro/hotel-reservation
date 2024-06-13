import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
  constructor(private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer) {

                this.matIconRegistry.addSvgIcon('plane', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/plane.svg'));
                this.matIconRegistry.addSvgIcon('dashed-line', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/dashed-line.svg'));
                this.matIconRegistry.addSvgIcon('map-marker-outline', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/map-marker-outline.svg'));
                this.matIconRegistry.addSvgIcon('map-marker-radius-outline', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/map-marker-radius-outline.svg'));
                this.matIconRegistry.addSvgIcon('calendar-blank', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/calendar-blank.svg'));
                this.matIconRegistry.addSvgIcon('bed', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/bed.svg'));
                this.matIconRegistry.addSvgIcon('person-fill', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/person-fill.svg'));
                this.matIconRegistry.addSvgIcon('search', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/search.svg'));
                this.matIconRegistry.addSvgIcon('search-filled', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/search-filled.svg'));
                this.matIconRegistry.addSvgIcon('star', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/star.svg'));
                this.matIconRegistry.addSvgIcon('check', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/check.svg'));
                this.matIconRegistry.addSvgIcon('grid-menu', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/grid-menu.svg'));
                this.matIconRegistry.addSvgIcon('list-top-menu', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/list-top-menu.svg'));

                this.matIconRegistry.addSvgIcon('car-brake-parking', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/car-brake-parking.svg'));
                this.matIconRegistry.addSvgIcon('dog-solid', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/dog-solid.svg'));
                this.matIconRegistry.addSvgIcon('desktop-solid', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/desktop-solid.svg'));
                this.matIconRegistry.addSvgIcon('washing-machine', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/washing-machine.svg'));
                this.matIconRegistry.addSvgIcon('plane-departure', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/plane-departure.svg'));
                this.matIconRegistry.addSvgIcon('dumbbell', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/dumbbell.svg'));
                
                //icons
                this.matIconRegistry.addSvgIcon('support', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/bx-support.svg'));
                this.matIconRegistry.addSvgIcon('map-pointer', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/map-marker-radius.svg'));
                this.matIconRegistry.addSvgIcon('mobile-android', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/mobile-android.svg'));
                this.matIconRegistry.addSvgIcon('money-bill', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/money-bill.svg'));
                this.matIconRegistry.addSvgIcon('security', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/security.svg'));
                this.matIconRegistry.addSvgIcon('speedometer', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/speedometer.svg'));
                this.matIconRegistry.addSvgIcon('call-support', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/call-support.svg'));

                //Arrows
                this.matIconRegistry.addSvgIcon('arrow-right-thin', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/arrow-right-thin.svg'));
                this.matIconRegistry.addSvgIcon('arrow-right', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/arrow-right.svg'));
                this.matIconRegistry.addSvgIcon('arrow-left', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/arrow-left.svg'));
                this.matIconRegistry.addSvgIcon('paginator-arrow-left', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/paginator-arrow-left.svg'));

                //Social media
                this.matIconRegistry.addSvgIcon('facebook', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/facebook.svg'));
                this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/linkedin.svg'));
                this.matIconRegistry.addSvgIcon('twitter', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/twitter.svg'));


  }
}
