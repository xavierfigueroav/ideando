import { Injectable } from '@angular/core';

@Injectable()
export class ActivitiesService {

  activities = [
    "Realizar una publicación en redes sociales que alcance a 1000 potenciales clientes",
    "Modificar el modelo de negocio considerando las ventas de la última semana",
    "Preguntar a 5 clientes qué les gusta, qué no les gusta del producto"
  ];

  constructor() { }

}