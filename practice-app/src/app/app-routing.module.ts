import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { FirstNavbarComponent } from 'src/app/first-navbar/first-navbar.component';
import { CarsComponent } from 'src/app/components/cars/cars.component';
import { AnimationsComponent } from 'src/app/components/animations/animations.component';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'firstNav', component: FirstNavbarComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'animations', component: AnimationsComponent},
  {path: 'carousel', component: CarouselComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
