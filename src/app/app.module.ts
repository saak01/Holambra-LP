import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { HeaderComponent } from './pages/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { ChallengeComponent } from './pages/challenge/challenge.component';
import { CardChallengeComponent } from './shared/components/card/card-challenge/card-challenge.component';
import { TimeLineComponent } from './pages/time-line/time-line.component';
import { CardTimeLineComponent } from './shared/components/card/card-time-line/card-time-line.component';
import { AwardsComponent } from './pages/awards/awards.component';
import { CardAwardComponent } from './shared/components/card/card-award/card-award.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { ContactFormComponent } from './pages/subscription/components/contact-form/contact-form.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ChallengeComponent,
    CardChallengeComponent,
    TimeLineComponent,
    CardTimeLineComponent,
    AwardsComponent,
    CardAwardComponent,
    SubscriptionComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
