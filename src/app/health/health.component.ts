import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  message$: Object;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getFragment('settlement_paragraph').subscribe(
       data => {
         this.message$ =  data; 
        }
    );
  }

}
