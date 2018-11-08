import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DocumentFragment} from './service/fragment'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getPing(){
    return this.http.get('http://contractoback.azurewebsites.net/yo?secret=po')
  }

  getFragment(name){
    return this.http.get('http://localhost:8080/fragment?name='+name)
  }

  getTemplate(name){
    return this.http.get('http://localhost:8080/template?name='+name)
  }

  getTemplateList(){
    return this.http.get('http://localhost:8080/templateList')
  }

  getTerm(name){
    return this.http.get(encodeURI('http://localhost:8080/term?term='+name));
  }

  getAllTerms(){
    return this.http.get(encodeURI('http://localhost:8080/allterms'));
  }
}
