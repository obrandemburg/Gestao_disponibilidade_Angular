import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-modal-novo-usuario',
  styleUrl: './modal-novo-usuario.css',
  templateUrl: './modal-novo-usuario.html',
})
export class ModalNovoUsuario {
  @Input() aberto = false;

  @Output() fechar = new EventEmitter<void>();
  @Output() salvar = new EventEmitter<string>();

  form = new FormGroup({
    nome: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  enviar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.salvar.emit(this.form.controls.nome.value);
    this.form.reset();
  }

  cancelar(): void {
    this.form.reset();
    this.fechar.emit();
  }
}