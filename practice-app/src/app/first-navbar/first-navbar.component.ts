import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-navbar',
  templateUrl: './first-navbar.component.html',
  styleUrls: ['./first-navbar.component.scss']
})
export class FirstNavbarComponent implements OnInit {
  innerWidth: any;
  constructor() { }

  ngOnInit() {
  }

}
