import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact;
  model: Contact = {
    name: '',
    email: '',
    text: ''
  }

  constructor() { }

  ngOnInit() {
  }

  onClick(model): void {
    event.preventDefault()
    console.log(model)
    this.model = {
      name: '',
      email: '',
      text: ''
    }
  }
}
