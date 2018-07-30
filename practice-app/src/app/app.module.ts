import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FirstNavbarComponent } from './first-navbar/first-navbar.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarsPipePipe } from './pipes/cars-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { DisplayPipe } from './pipes/display.pipe';
import { AnimationsComponent } from './components/animations/animations.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstNavbarComponent,
    CarsComponent,
    CarsPipePipe,
    DisplayPipe,
    AnimationsComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
