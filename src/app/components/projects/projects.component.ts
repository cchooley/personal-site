import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  click1: boolean
  click2: boolean
  click3: boolean
  click4: boolean

  constructor() { }

  ngOnInit() {
  }

}
