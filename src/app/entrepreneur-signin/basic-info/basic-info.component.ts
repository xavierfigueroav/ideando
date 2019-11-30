import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  
  default_photo = "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png";
  photo: string;

  constructor() { }

  ngOnInit() {
  }

}