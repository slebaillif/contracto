import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clause',
  templateUrl: './clause.component.html',
  styleUrls: ['./clause.component.scss']
})
export class ClauseComponent implements OnInit {
  posts$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data 
    );
  }


}
