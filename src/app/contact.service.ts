import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:HttpClient) { }

  getContacts(){
  return this.httpClient.get('http://localhost:3000/contact');
  }

  
}
