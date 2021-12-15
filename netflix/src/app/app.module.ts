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
import { StoreModule } from '@ngrx/store';
import { userReducer } from './state/user/user.reducer';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user/user.effects';

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
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({user: userReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
