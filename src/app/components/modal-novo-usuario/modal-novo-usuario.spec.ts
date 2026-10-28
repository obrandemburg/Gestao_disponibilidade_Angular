import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalNovoUsuario } from './modal-novo-usuario';

describe('ModalNovoUsuario', () => {
  let component: ModalNovoUsuario;
  let fixture: ComponentFixture<ModalNovoUsuario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalNovoUsuario],
    }).compileComponents();

    fixture = TestBed.createComponent(ModalNovoUsuario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
