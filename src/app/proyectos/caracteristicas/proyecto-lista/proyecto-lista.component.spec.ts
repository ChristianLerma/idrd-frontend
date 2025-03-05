import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoListaComponent } from './proyecto-lista.component';

describe('ProyectoListaComponent', () => {
  let component: ProyectoListaComponent;
  let fixture: ComponentFixture<ProyectoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProyectoListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
