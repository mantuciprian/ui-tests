import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  cars: any[];

  curentCar :string;
  startCarousel;
  start:number;
  restore;
  constructor() { }

  ngOnInit() {
    this.cars = ['../../../assets/bmw1.jpg', '../../../assets/bmw2.jpg', '../../../assets/bmw3.jpg'];
    this.start = 0;
    this.curentCar = this.cars[this.start];
    this.startCarousel = setInterval(() => {
      if(this.start !== 2) {
        this.start++;
        this.curentCar = this.cars[this.start];
      } else {
        this.start = 0;
        this.curentCar = this.cars[this.start];
      }
     },4000);
  }

  leftArr() {
    clearTimeout(this.startCarousel);
    if(this.start !== 0) {
      this.start--;
      this.curentCar = this.cars[this.start];
    }
    if(this.restore) {
      clearTimeout(this.restore);
    }
    this.restore = setTimeout(()=>{
      this.startCarousel = setInterval(() => {
        if(this.start !== 2) {
          this.start++;
          this.curentCar = this.cars[this.start];
        } else {
          this.start = 0;
          this.curentCar = this.cars[this.start];
        }
       },4000);
    }, 5000);
  }

  rightArr() {
    clearTimeout(this.startCarousel);
    if(this.start !== 2) {
      this.start++;
      this.curentCar = this.cars[this.start];
    }
    if(this.restore) {
      clearTimeout(this.restore);
    }

    if(this.restore) {
      clearTimeout(this.restore);
    }
    this.restore = setTimeout(()=>{
      this.startCarousel = setInterval(() => {
        if(this.start !== 2) {
          this.start++;
          this.curentCar = this.cars[this.start];
        } else {
          this.start = 0;
          this.curentCar = this.cars[this.start];
        }
       },4000);
    }, 5000);
  }


}
