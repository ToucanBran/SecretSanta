import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SantalistComponent } from './santalist.component';

describe('SantalistComponent', () => {
  let component: SantalistComponent;
  let fixture: ComponentFixture<SantalistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SantalistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SantalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
