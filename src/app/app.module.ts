import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DonateComponent } from './donate/donate.component';
import { MilkComponent } from './milk/milk.component';
import { AppleComponent } from './apple/apple.component';
import { BananaComponent } from './banana/banana.component';
import { TomatoComponent } from './tomato/tomato.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    DonateComponent,
    MilkComponent,
    AppleComponent,
    BananaComponent,
    TomatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
