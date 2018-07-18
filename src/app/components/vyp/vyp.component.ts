import { Component, EventEmitter, OnInit } from '@angular/core';
import { MaterializeAction } from 'angular2-materialize';

@Component({
  selector: 'app-vyp',
  templateUrl: './vyp.component.html',
  styleUrls: ['./vyp.component.css']
})
export class VypComponent implements OnInit {
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