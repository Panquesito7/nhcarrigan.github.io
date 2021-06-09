import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as Sentry from '@sentry/angular';
import { Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { CharacterComponent } from './character/character.component';
import { AboutComponent } from './about/about.component';
import { WorkComponent } from './work/work.component';
import { SocialComponent } from './social/social.component';
import { ContactComponent } from './contact/contact.component';
import { SupportComponent } from './support/support.component';
import { NgParticlesModule } from 'ng-particles';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    CharacterComponent,
    AboutComponent,
    WorkComponent,
    SocialComponent,
    ContactComponent,
    SupportComponent,
    FourOhFourComponent,
    PrivacyComponent,
    TermsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgParticlesModule],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true,
      }),
    },
    {
      provide: Sentry.TraceService,
      deps: [Router],
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
