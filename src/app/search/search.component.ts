import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public contactService:ContactService) { }

  contactList:any;

  ngOnInit(): void {
     this.contactService.getContacts().subscribe(data => {
      this.contactList = data;
    })
  }



}
