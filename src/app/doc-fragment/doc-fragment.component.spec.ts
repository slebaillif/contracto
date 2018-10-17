import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocFragmentComponent } from './doc-fragment.component';

describe('DocFragmentComponent', () => {
  let component: DocFragmentComponent;
  let fixture: ComponentFixture<DocFragmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocFragmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocFragmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
