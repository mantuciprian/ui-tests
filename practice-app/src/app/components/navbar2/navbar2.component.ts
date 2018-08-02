import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component implements OnInit {

  showMenu:boolean;
  firstLoad:boolean;
  constructor() { }

  ngOnInit() {
    this.showMenu = false;
    this.firstLoad = true;
  }

  displayMenu() {
    this.showMenu = !this.showMenu;
    this.firstLoad = false;
  }

}
