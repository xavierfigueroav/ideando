import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from '../services/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  activities: any[];

  constructor(private activitiesService: ActivitiesService) { 
    this.activities = activitiesService.activities;
   }

  ngOnInit() {
  }

  onDone(index) {
    this.activities.splice(index, 1);
  }

}