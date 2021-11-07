import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { LangComponent } from './shared/components/lang/lang.component';
import { LogBtnComponent } from './shared/components/log-btn/log-btn.component';
import { LoginComponent } from './login/login/login.component';
import { FaqContainerComponent } from './home/faq-container/faq-container.component';
import { FaqSingleComponent } from './home/faq-single/faq-single.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServicesComponent } from './home/services/services.component';
import { ServicesSingleComponent } from './home/services-single/services-single.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LangComponent,
    LogBtnComponent,
    LoginComponent,
    FaqContainerComponent,
    FaqSingleComponent,
    ServicesComponent,
    ServicesSingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
