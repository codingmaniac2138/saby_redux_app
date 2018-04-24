import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondlandingComponent } from './bondlanding.component';

describe('BondlandingComponent', () => {
  let component: BondlandingComponent;
  let fixture: ComponentFixture<BondlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
