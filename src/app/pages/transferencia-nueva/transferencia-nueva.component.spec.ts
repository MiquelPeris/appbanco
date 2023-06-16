import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciaNuevaComponent } from './transferencia-nueva.component';

describe('TransferenciaNuevaComponent', () => {
  let component: TransferenciaNuevaComponent;
  let fixture: ComponentFixture<TransferenciaNuevaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferenciaNuevaComponent]
    });
    fixture = TestBed.createComponent(TransferenciaNuevaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
