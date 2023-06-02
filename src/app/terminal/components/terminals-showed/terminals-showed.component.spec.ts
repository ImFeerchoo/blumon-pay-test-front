import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalsShowedComponent } from './terminals-showed.component';

describe('TerminalsShowedComponent', () => {
  let component: TerminalsShowedComponent;
  let fixture: ComponentFixture<TerminalsShowedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalsShowedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalsShowedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
