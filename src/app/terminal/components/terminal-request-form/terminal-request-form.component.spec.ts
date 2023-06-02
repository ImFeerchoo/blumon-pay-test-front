import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminalRequestFormComponent } from './terminal-request-form.component';

describe('TerminalRequestFormComponent', () => {
  let component: TerminalRequestFormComponent;
  let fixture: ComponentFixture<TerminalRequestFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminalRequestFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerminalRequestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
