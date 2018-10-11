import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import {DocumentFragment} from '../service/fragment';
import {Paragraph} from '../service/paragraph';
import { DictonaryTerm } from "../service/dictonaryTerm";

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit {
  message$: DocumentFragment;
  termSentence$:{[key:string]:boolean;} ={};
  termForSentence$:{[key:string]:DictonaryTerm;} ={};

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getFragment('settlement_paragraph').subscribe(
       data => {
         this.message$ = <DocumentFragment> data; 
         console.log(this.message$);
         for(var h in this.message$.paragraphs){
           let p:Paragraph =<Paragraph>this.message$.paragraphs[h];
           for(var s in p.sentences){
            this.termSentence$[p.sentences[s]] = p.sentences[s].startsWith("[");
            for(let t in p.terms){
              if(p.sentences[s] === "["+p.terms[t].name+"]") {
                this.termForSentence$[p.sentences[s]] = p.terms[t];
               }
            }
            console.log(this.termForSentence$[p.sentences[s]]);
            console.log(this.termSentence$[p.sentences[s]]);
           }
         }
        }
    );
  }

}
