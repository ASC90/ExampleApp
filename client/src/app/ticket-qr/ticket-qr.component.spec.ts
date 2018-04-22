import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketQrComponent } from './ticket-qr.component';

describe('TicketQrComponent', () => {
  let component: TicketQrComponent;
  let fixture: ComponentFixture<TicketQrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketQrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
