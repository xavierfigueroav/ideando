import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.css']
})
export class ProgressCircleComponent implements OnInit {

  @Input() color: string;
  @Input() progress: number;
  @Input() author: string;
  @Input() message: string;

  constructor() { }

  ngOnInit() {
  }

}