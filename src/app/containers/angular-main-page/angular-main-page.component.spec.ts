import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMainPageComponent } from './angular-main-page.component';

describe('AngularMainPageComponent', () => {
  let component: AngularMainPageComponent;
  let fixture: ComponentFixture<AngularMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
