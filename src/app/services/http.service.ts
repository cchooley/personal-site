
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpModule, Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { Message } from '../models/message';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url = `https://cchpersonalsite.herokuapp.com/messages`
  message: Subject<Message>
  id: number

  constructor(private _http: HttpClient) {
    this.message = new Subject()
  }

  getMessages(): Observable<Message> {
    return this._http.get<Message>(this.url)
  }

  postMessage(message: Message): Observable<Message> {
    return this._http.post<Message>(this.url, message, httpOptions)
  }

}
