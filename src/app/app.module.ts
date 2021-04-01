import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FastfoodComponent } from './fastfood/fastfood.component';
import { FooterComponent } from './footer/footer.component';
import { SaladsComponent } from './salads/salads.component';
import { SnacksComponent } from './snacks/snacks.component';
import { SoftdrinksComponent } from './softdrinks/softdrinks.component';
import { StartersComponent } from './starters/starters.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BreakfastComponent,
    CarouselComponent,
    FastfoodComponent,
    FooterComponent,
    SaladsComponent,
    SnacksComponent,
    SoftdrinksComponent,
    StartersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
