import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.css']
})
export class SoftSkillsComponent implements OnInit {

  skills = [
    "Trabajo en quipo",
    "Adaptabilidad",
    "Creatividad",
    "Resolución de problemas",
    "Comunicación",
    "Inteligencia emocional",
    "Manejo del tiempo",
    "Trabajo bajo presión"
  ]

  // @ViewChild("chartCanvas", {static: false}) chartCanvas: ElementRef;
  // chart: Chart;

  constructor() { 
  }

  ngOnInit() {
    // console.log(new Chart());
  }

}