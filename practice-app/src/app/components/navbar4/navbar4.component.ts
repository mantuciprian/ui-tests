import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar4',
  templateUrl: './navbar4.component.html',
  styleUrls: ['./navbar4.component.scss']
})
export class Navbar4Component implements OnInit {
  showTabs:boolean;
  dontAnim:boolean;
  constructor() { }

  ngOnInit() {
    this.showTabs = false;
    this.dontAnim = true;
  }

  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.dontAnim = false;
  }

}
