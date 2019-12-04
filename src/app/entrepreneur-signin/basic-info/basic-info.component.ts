import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.css']
})
export class BasicInfoComponent implements OnInit {
  
  default_photo = "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png";
  photo: string;

  @ViewChild("name", {static: false}) name: ElementRef;
  @ViewChild("lastname", {static: false}) lastname: ElementRef;
  @ViewChild("dni", {static: false}) dni: ElementRef;
  @ViewChild("email", {static: false}) email: ElementRef;
  @ViewChild("password", {static: false}) password: ElementRef;
  @ViewChild("dob", {static: false}) dob: ElementRef;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.userService.user_info = {
      name: this.name.nativeElement.value,
      lastname: this.lastname.nativeElement.value,
      dni: this.dni.nativeElement.value,
      email: this.email.nativeElement.value,
      password: this.password.nativeElement.value,
      dob: this.dob.nativeElement.value,
      photo: this.photo || this.default_photo
    };
  }

}