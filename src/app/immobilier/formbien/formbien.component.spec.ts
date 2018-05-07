import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbienComponent } from './formbien.component';

describe('FormbienComponent', () => {
  let component: FormbienComponent;
  let fixture: ComponentFixture<FormbienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormbienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
