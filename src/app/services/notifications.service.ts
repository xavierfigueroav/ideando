import { Injectable } from '@angular/core';

@Injectable()
export class NotificationsService {

  notifications = [
    "Juan te ha envidado un mensaje",
    "Cámara Industrias ha publicado un evento que te puede interesar",
    "Tienes una reunión con Mentor 1, hoy, a las 15h00",
    "Porta ac consectetur ac",
    "Vestibulum at eros"
  ];

  constructor() { }

}