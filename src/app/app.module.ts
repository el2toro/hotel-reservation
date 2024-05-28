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

                this.matIconRegistry.addSvgIcon('menu', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/menu-icon.svg'));
                this.matIconRegistry.addSvgIcon('close', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/close-icon.svg'));

                //icons
                this.matIconRegistry.addSvgIcon('support', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/bx-support.svg'));
                this.matIconRegistry.addSvgIcon('map-pointer', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/map-marker-radius.svg'));
                this.matIconRegistry.addSvgIcon('mobile-android', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/mobile-android.svg'));
                this.matIconRegistry.addSvgIcon('money-bill', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/money-bill.svg'));
                this.matIconRegistry.addSvgIcon('security', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/security.svg'));
                this.matIconRegistry.addSvgIcon('speedometer', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/speedometer.svg'));

                this.matIconRegistry.addSvgIcon('arrow-right-thin', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/svg/arrow-right-thin.svg'));
            
  }
}
