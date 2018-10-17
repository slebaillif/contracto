import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {

  constructor(private data: DataService) { }

  templateList$:string[];

  ngOnInit() {
    this.data.getTemplateList().subscribe(
      data => {
        this.templateList$ =  <string[]>data; 
        console.log("template list",this.templateList$);
      }
    );
  }

}
