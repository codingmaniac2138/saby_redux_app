import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocrtableComponent } from './infocrtable.component';

describe('InfocrtableComponent', () => {
  let component: InfocrtableComponent;
  let fixture: ComponentFixture<InfocrtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocrtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocrtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
