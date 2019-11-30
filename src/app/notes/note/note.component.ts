import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  colors = {
    blue: 'bg-primary text-white',
    grey: 'bg-secondary text-white',
    orange: 'bg-warning text-white',
    red: 'bg-danger text-white',
    green: 'bg-success text-white'
  };

  @Input() type: string;
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
  @Input() date: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {

    if(this.title && this.text && this.image) this.type = 'titeim';
    else if(this.title && this.text) this.type = 'tite';
    else if(this.text) this.type = 'te';
    else if(this.image) this.type = 'im';
    
    this.color = this.colors[this.color] || this.color;

  }

}