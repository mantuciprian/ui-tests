import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar3',
  templateUrl: './navbar3.component.html',
  styleUrls: ['./navbar3.component.scss']
})
export class Navbar3Component implements OnInit {
  slideDown:boolean;
  disabledAnim:boolean;
  constructor() { }

  ngOnInit() {
    this.slideDown =  false;
    this.disabledAnim = true;
  }

  slideDownMenu() {
    this.slideDown = !this.slideDown;
    this.disabledAnim = false;
  }

}
