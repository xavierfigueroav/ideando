import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: any[];

  @ViewChild("title",  {static: false}) title: ElementRef;
  @ViewChild("text",  {static: false}) text: ElementRef;
  @ViewChild("image",  {static: false}) image: ElementRef;
  color_selected: string;

  constructor(private notesService: NotesService) { 
    this.notes = notesService.notes;
  }

  ngOnInit() {
  }

  onAdd(){
    this.notes.push({ 
      title: this.title.nativeElement.value,
      text: this.text.nativeElement.value,
      image: this.image.nativeElement.value,
      color: this.color_selected
    });

    this.title.nativeElement.value = "";
    this.text.nativeElement.value = "";
    this.image.nativeElement.value = "";
    this.color_selected = undefined;
  }

}