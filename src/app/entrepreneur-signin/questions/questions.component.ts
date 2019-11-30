import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions = [
    {
      question: "¿Es su emprendimiento, está solo o tiene equipo?",
      options: [
        "Por ahora solo pero eventualemente espero incorporar más personas",
        "Somos 10 o menos",
        "Somos más de 10"
      ]
    },
    {
      question: "¿Qué tan necesario es para usted hablar en público?",
      options: [
        "Necesito hacerlo para atraer a mis clientes",
        "Me comunico más por redes sociales",
        "Tengo que habalr con mis clientes solo al momento de cerrar la venta"
      ]
    },
    {
      question: "¿Tiene alguna metodología de gestión de proyectos?",
      options: [
        "Sí, Scrum",
        "Sí, Ágil",
        "No, desconozco qué es una metodoloǵia de gestión de proyectos"
      ]
    },
    {
      question: "Cuando encuentra dificultades u obstáculos en su emprendimiento, ¿cómo reacciona?",
      options: [
        "Me enfurezco o me deprimo",
        "No me ha tocado pasar por obstáculos",
        "No lo soluciono, voy por lo más fácil",
        "Pido ayuda"
      ]
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}