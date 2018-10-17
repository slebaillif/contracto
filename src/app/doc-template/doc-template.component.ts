import { Component, OnInit } from '@angular/core';
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
  template$:DocumentTemplate;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getTemplate('contract').subscribe(
      data => {
        this.template$ = <DocumentTemplate> data; 
        console.log("fragment",this.template$.fragmentNames);
      }
    );
  }

}
