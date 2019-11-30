import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {

  notes = [
    {
      title:"Card title", 
      text:"This card has supporting text below as a natural lead-in to additional content.", 
      image: "https://definicion.mx/wp-content/uploads/2013/05/diagrama.jpg"
    },
    { image: "https://d2yoo3qu6vrk5d.cloudfront.net/images/20170211154021/falso-trump-482x320.jpg" },
    {
      title: "Card title", 
      text: "This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall."
    },
    {
      text: "This is another card with title and supporting text below. This card has some additional content to make it slightly taller overall.",
      color: "blue"
    }
  ];

  constructor() { }

}