import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar5',
  templateUrl: './navbar5.component.html',
  styleUrls: ['./navbar5.component.scss']
})
export class Navbar5Component implements OnInit {

  showTabs: boolean;
  dontAnim: boolean;
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
