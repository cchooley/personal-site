import { Component, OnInit } from '@angular/core';

import { Message } from '../../models/message';

import { HttpService } from '../../services/http.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  message: Message;
  messageArr: Message[] = []
  model: Message = {
    name: '',
    email: '',
    message: ''
  }
  submit: boolean

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  onClick(model): void {
    event.preventDefault()
    console.log(model)
    this._httpService.postMessage(this.model)
      .subscribe(message => {
        this.messageArr.push(message)
    })
  }
}
