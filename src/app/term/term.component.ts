import { Component, OnInit , Input} from '@angular/core';
import { DataService } from '../data.service';
import {DictonaryTerm} from '../service/dictonaryTerm';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.scss']
})
export class TermComponent implements OnInit {

  @Input() name:string;
  termDefinition$: DictonaryTerm;

  constructor(private data: DataService,
    private _route: ActivatedRoute) { 
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      console.log("params:"+params);
      if(params['term'] == undefined){
         this.termDefinition$ = {name:"No term selected.", description:"", values:[]};
      }else{
      this.name = params['term'];
      this.data.getTerm(this.name).subscribe(
        data => {
          this.termDefinition$ = <DictonaryTerm> data; 
          
        }
      );
    }
  });
  
  }

}
