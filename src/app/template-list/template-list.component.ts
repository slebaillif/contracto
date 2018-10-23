import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {

  templateList$:string[];
  selectedTemplate:string;

  constructor(private data: DataService) {
    this.selectedTemplate='contract';
   }



  ngOnInit() {
    this.data.getTemplateList().subscribe(
      data => {
        this.templateList$ =  <string[]>data; 
        this.selectedTemplate = this.templateList$[0];
        console.log("template list",this.templateList$);
      }
    );
  }

  onSelectTemplate(name){
    console.log("selected template:",name);
    console.log("selected template prop:",this.selectedTemplate);
  }
}
