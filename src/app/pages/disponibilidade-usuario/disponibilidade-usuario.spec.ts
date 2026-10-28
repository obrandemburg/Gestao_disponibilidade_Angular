import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DisponibilidadeUsuario } from './disponibilidade-usuario';

describe('DisponibilidadeUsuario', () => {
  let component: DisponibilidadeUsuario;
  let fixture: ComponentFixture<DisponibilidadeUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisponibilidadeUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(DisponibilidadeUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
