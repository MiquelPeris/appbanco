import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferenciasDetalleComponent } from './transferencias-detalle.component';

describe('TransferenciasDetalleComponent', () => {
  let component: TransferenciasDetalleComponent;
  let fixture: ComponentFixture<TransferenciasDetalleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransferenciasDetalleComponent]
    });
    fixture = TestBed.createComponent(TransferenciasDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
