import { Injectable } from '@angular/core';

@Injectable()
export class PhasesService {

  phrases: string[];

  constructor() {

    this.phrases = [
      "Todo lo que necesitas para ser feliz se encuentra al otro lado de tus miedo",
      "El momento que da más miedo es siempre justo antes de empezar",
      "Mañana es una excusa maravillosa, ¿No crees?",
      "Existe el mañana por alguna razón",
      "Cualquier cosa que te plante la vida florecela con gracia",
      "Deséalo, espéralo, suéñalo, pero por todos los medios… ¡Hazlo!"
    ];

    this.shuffle(this.phrases);

  }

  shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

}