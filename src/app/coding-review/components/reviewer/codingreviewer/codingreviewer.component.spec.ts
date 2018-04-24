import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingreviewerComponent } from './codingreviewer.component';

describe('CodingreviewerComponent', () => {
  let component: CodingreviewerComponent;
  let fixture: ComponentFixture<CodingreviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingreviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingreviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
