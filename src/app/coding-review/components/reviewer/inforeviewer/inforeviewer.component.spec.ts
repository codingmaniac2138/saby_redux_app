import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InforeviewerComponent } from './inforeviewer.component';

describe('InforeviewerComponent', () => {
  let component: InforeviewerComponent;
  let fixture: ComponentFixture<InforeviewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InforeviewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InforeviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
