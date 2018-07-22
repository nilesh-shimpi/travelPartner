import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TravelplaceComponent } from './travelplace/travelplace.component';
import { TravelPlaceService } from './travelplace/travelplace.service';
import { SliderModule } from 'angular-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    TravelplaceComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  providers: [
    TravelPlaceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
