import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EmailFormComponent } from './components/email-form/email-form.component';
import { FaqContainerComponent } from './components/faq-container/faq-container.component';
import { FaqSingleComponent } from './components/faq-single/faq-single.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesSingleComponent } from './components/services-single/services-single.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    EmailFormComponent,
    FaqContainerComponent,
    FaqSingleComponent,
    ServicesComponent,
    ServicesSingleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
