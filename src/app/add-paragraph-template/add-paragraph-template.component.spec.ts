import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddParagraphTemplateComponent } from './add-paragraph-template.component';

describe('AddParagraphTemplateComponent', () => {
  let component: AddParagraphTemplateComponent;
  let fixture: ComponentFixture<AddParagraphTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddParagraphTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddParagraphTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
