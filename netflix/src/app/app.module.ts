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
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './state/user/user.effects';
import { SearchInputComponent } from './shared/components/search-input/search-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { searchReducer } from './state/search/search.reducer';
import { Product } from './shared/models/movie.model';
import { SearchEffects } from './state/search/search.effects';
import { SharedState } from './state/shared.state';
import { sharedReducer } from './state/shared.reducer';



// const reducers: ActionReducerMap<SharedState> = {
//   users: userReducer,
//   search: searchReducer
// }

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LangComponent,
    LogBtnComponent,
    FooterComponent,
    AppContainerComponent,
    InvalidUrlPageComponent,
    SearchInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    StoreModule.forRoot({'shared': sharedReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 20
    }),
    EffectsModule.forRoot([UserEffects, SearchEffects]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
