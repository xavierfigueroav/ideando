import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service'

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: any[];

  constructor(private notificationsService: NotificationsService) { 
    this.notifications = notificationsService.notifications;
  }

  ngOnInit() {
  }

  onDelete(index){
    this.notifications.splice(index, 1);
  }

}