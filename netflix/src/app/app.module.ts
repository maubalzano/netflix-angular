import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { EmailFormComponent } from './home/email-form/email-form.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AppContainerComponent } from './components/app-container/app-container.component';
import { InvalidUrlPageComponent } from './invalid-url-page/invalid-url-page.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { UsersComponent } from './users/users-list/users.component';
import { AddProfileComponent } from './users/add-profile/add-profile.component';
import { UsersContainerComponent } from './users/users-container/users-container.component';
import { EditProfileComponent } from './users/edit-profile/edit-profile.component';


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
    ServicesSingleComponent,
    EmailFormComponent,
    FooterComponent,
    AppContainerComponent,
    InvalidUrlPageComponent,
    LoginFormComponent,
    UsersComponent,
    AddProfileComponent,
    UsersContainerComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
