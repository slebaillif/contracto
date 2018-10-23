import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {DocumentFragment} from '../service/fragment';
import {DocumentTemplate} from '../service/docTemplate';
import {Paragraph} from '../service/paragraph';
import { DictonaryTerm } from "../service/dictonaryTerm";

@Component({
  selector: 'app-doc-template',
  templateUrl: './doc-template.component.html',
  styleUrls: ['./doc-template.component.scss']
})
export class DocTemplateComponent implements OnInit {
  @Input() name:string ;
  template$:DocumentTemplate;

  constructor(private data: DataService) { 
    this.name='contract'
  }

  ngOnInit() {
    this.data.getTemplate(this.name).subscribe(
      data => {
        this.template$ = <DocumentTemplate> data; 
        console.log("fragment",this.template$.fragmentNames);
      }
    );
  }
  ngOnChanges(changes:SimpleChanges){
    this.data.getTemplate(changes.name.currentValue).subscribe(
      data => {
        this.template$ = <DocumentTemplate> data; 
        console.log("fragment",this.template$.fragmentNames);
      }
    );
      console.log("values change, current:", changes.name.currentValue);
      console.log("values change, previous:", changes.previousValue);
  }

}
