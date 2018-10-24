import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { HttpModule } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import {DictonaryTerm} from '../service/dictonaryTerm';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-addterm',
  templateUrl: './addterm.component.html',
  styleUrls: ['./addterm.component.scss']
})
export class AddtermComponent implements OnInit {

  newTerm:DictonaryTerm;
  

  constructor(private http: HttpClient) {
    this.newTerm={name:"enter a name", description:"enter a description", values:[]};
   }

  ngOnInit() {
  }

  onSubmit(){
    
    let httpOptions = {      headers: new HttpHeaders({        'Content-Type':  'application/json'})};
    let ob = this.http.post<DictonaryTerm>("http://localhost:8080/addterm", this.newTerm, httpOptions);
    ob.subscribe(d => {console.log("result:"+d)}); 
    console.log("Submitted:"+this.newTerm);
  }

}
