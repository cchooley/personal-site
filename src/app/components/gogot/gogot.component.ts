import { Component, EventEmitter, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';


@Component({
  selector: 'app-gogot',
  templateUrl: './gogot.component.html',
  styleUrls: ['./gogot.component.css']
})
export class GogotComponent implements OnInit {
  modalActions = new EventEmitter<string | MaterializeAction>();
  openModal() {
    this.modalActions.emit({ action: "modal", params: ['open'] });
  }
  closeModal() {
    this.modalActions.emit({ action: "modal", params: ['close'] });
  }

  constructor() { }

  ngOnInit() {
    this.openModal()
  }



}
