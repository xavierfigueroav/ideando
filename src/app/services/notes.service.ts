import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {

  notes = [
    {
      title:"Título de nota", 
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 
      image: "https://definicion.mx/wp-content/uploads/2013/05/diagrama.jpg"
    },
    { image: "https://d2yoo3qu6vrk5d.cloudfront.net/images/20170211154021/falso-trump-482x320.jpg" },
    {
      title: "Título de nota", 
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      color: "blue"
    }
  ];

  constructor() { }

}