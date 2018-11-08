import { Component, OnInit, ElementRef } from '@angular/core';
import { DocumentFragment } from '../service/fragment';
import { Paragraph } from '../service/paragraph';
import { DictonaryTerm } from "../service/dictonaryTerm";
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-paragraph-template',
  templateUrl: './add-paragraph-template.component.html',
  styleUrls: ['./add-paragraph-template.component.scss']
})
export class AddParagraphTemplateComponent implements OnInit {
  newFragment: DocumentFragment;
  newParagraph: Paragraph;
  textArea: HTMLInputElement;

  query = "";
  termsList = [];
  filteredList = [];
  searchOn = false;
  previousOpening = -1;


  constructor(private data: DataService) {
    this.newParagraph = { paragraph: "", sentences: [], terms: [] };
    this.newFragment = { title: "", paragraphs: [] };
  }

  ngOnInit() {
    this.data.getAllTerms().subscribe(
      data => {
        this.termsList = <DictonaryTerm[]>data;
      }
    );
  }

  filter(event) {
    this.textArea = event.target;

    if (event.key == "]") {
      this.searchOn = false;
      this.query = "";
    }
    if (this.searchOn) {
      this.query = this.query + event.key;
    }

    if (this.query !== "" && this.searchOn) {
      this.filteredList = this.termsList.filter(function (el) {
        return el.name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }

    if (event.key == "[") {
      this.searchOn = true;
      this.previousOpening = event.target.selectionStart;
    }
  }

  select(item) {
    this.query = item.name;
    let a = <HTMLInputElement>this.textArea;

    let s = a.textContent.slice(0, this.previousOpening) + "[" +
      item.name + a.textContent.slice(a.selectionStart, a.value.length) + "]";

    a.textContent = s;
    this.filteredList = [];
    this.previousOpening = -1;
    this.searchOn = false;
    this.query = "";
  }

}
