import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorInicioSesionComponent } from './error-inicio-sesion.component';

describe('ErrorInicioSesionComponent', () => {
  let component: ErrorInicioSesionComponent;
  let fixture: ComponentFixture<ErrorInicioSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorInicioSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorInicioSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
