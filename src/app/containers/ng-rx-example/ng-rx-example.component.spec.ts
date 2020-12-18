import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxExampleComponent } from './ng-rx-example.component';

describe('NgRxExampleComponent', () => {
  let component: NgRxExampleComponent;
  let fixture: ComponentFixture<NgRxExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgRxExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
