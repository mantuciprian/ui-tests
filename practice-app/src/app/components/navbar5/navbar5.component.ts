import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar5',
  templateUrl: './navbar5.component.html',
  styleUrls: ['./navbar5.component.scss']
})
export class Navbar5Component implements OnInit {

  showTabs: boolean;
  dontAnim: boolean;
  showBlog: boolean;
  dontAnimBlog:boolean;
  constructor() { }

  ngOnInit() {
    this.showTabs = false;
    this.dontAnim = true;
    this.showBlog = false;
    this.dontAnimBlog = true;
  }


  toggleTabs() {
    this.showTabs = !this.showTabs;
    this.dontAnim = false;
    this.showBlog = false;
    this.dontAnimBlog = true;
    
  }

  toggleBlog() {
    this.showBlog = !this.showBlog ;
    this.dontAnimBlog = false;
  }


}
