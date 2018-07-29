import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {
  shown: boolean;
  slide: boolean;
  picked: string;
  constructor() { }

  ngOnInit() {
    this.shown = false;
    this.slide = false;
  }

  hideBar() {
    this.shown = !this.shown;
  }

  slideBar() {
    this.slide = !this.slide;
  }

  allowDrop(ev) {
    ev.preventDefault();
 }

 drop(ev) {
   console.log(ev.target.id);
   if (this.picked === ev.target.id) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
    } else if (ev.target.id === 'holder') {
      ev.preventDefault();
      const data = ev.dataTransfer.getData('text');
      ev.target.appendChild(document.getElementById(data));
    } else {
      alert('incorect area !');
    }
}
drag(ev) {
  console.log('picked : ', ev.target.getAttribute('correct'));
  this.picked = ev.target.getAttribute('correct');
  ev.dataTransfer.setData('text', ev.target.id);
}


}
