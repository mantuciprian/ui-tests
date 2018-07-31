import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-navbar',
  templateUrl: './first-navbar.component.html',
  styleUrls: ['./first-navbar.component.scss']
})
export class FirstNavbarComponent implements OnInit {
  innerWidth: any;
  mobile: boolean;
  constructor() { }

  ngOnInit() {
    this.mobile = false;
  }

  showResp() {
    this.mobile = !this.mobile;
  }

}
