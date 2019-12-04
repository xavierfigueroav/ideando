import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  user_info = {

    name: "Carlos",
    lastname: "Orellana",
    dni: "0955504212",
    email: "carlos@espol.edu.ec",
    password: "mypass",
    dob: "1997-06-06",
    photo: "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/8_avatar-512.png"

  }

  constructor() { }

}