import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  cars: any[];
  searched: string;
  isDisplayed = true;
  constructor() { }
  ngOnInit() {
    this.cars =  [
      {make: 'BMW', model:'M3', year:2018,price:56000, country:'Germany', fuel:'gassoline', hp:'560', body:'coupe', color:'white'},
      {make: 'Audi', model: 'Q7', year:2018, price:81000, country:'Germany', fuel:'diesel', hp:'390', body:'SUV', color:'silver'},
      {make: 'Mercedes', model: 'E200', year:2018, price:70000, country:'Germany', fuel:'diesel', hp:'420', body:'sedan', color:'black'},
      {make: 'Hyundai', model: 'i20', year:2016, price:27000, country:'Japan', fuel:'gassoline', hp:'120', body:'sedan', color:'silver'}
   ];
  }

}
