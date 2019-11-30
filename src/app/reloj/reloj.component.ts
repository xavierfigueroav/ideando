import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  seconds: string;
  minutes: string;
  hours: string;

  constructor() {

    let date = new Date();
    let sec = date.getSeconds();
    this.seconds = sec < 10 ? "0" + sec.toString() : sec.toString(); 
    let min = date.getMinutes();
    this.minutes = min < 10 ? "0" + min.toString() : min.toString(); 
    let h = date.getHours();
    this.hours = h < 10 ? "0" + h.toString() : h.toString(); 

   }

  ngOnInit() {

    let reloj = this;
    setInterval(function(){
      let date = new Date();
      let sec = date.getSeconds();
      reloj.seconds = sec < 10 ? "0" + sec.toString() : sec.toString(); 
      let min = date.getMinutes();
      reloj.minutes = min < 10 ? "0" + min.toString() : min.toString(); 
      let h = date.getHours();
      reloj.hours = h < 10 ? "0" + h.toString() : h.toString(); 
    }, 1000)

  }

}