import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { LangComponent } from './shared/components/lang/lang.component';
import { LogBtnComponent } from './shared/components/log-btn/log-btn.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { InvalidUrlPageComponent } from './components/invalid-url-page/invalid-url-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LangComponent,
    LogBtnComponent,
    FooterComponent,
    AppContainerComponent,
    InvalidUrlPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
