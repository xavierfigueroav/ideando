import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { PhasesService } from '../services/phases.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [PhasesService]
})
export class DashboardComponent implements OnInit {

  user_info: any;
  phrase: string;

  constructor(private userService: UserService, private phrasesService: PhasesService) { 

    this.user_info = userService.user_info;
    this.phrase = phrasesService.phrases[0];

  }

  ngOnInit() {
  }

}