import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { UsuarioService } from '../../services/usuario-service';
import { Usuario } from '../../models/usuario';

function validarHorario(controle: AbstractControl): ValidationErrors | null {
  const disponivel = controle.get('disponivel')?.value;
  const inicio = controle.get('inicio')?.value;
  const fim = controle.get('fim')?.value;

  if (!disponivel) {
    return null;
  }

  if (!inicio || !fim) {
    return { horarioObrigatorio: true };
  }

  if (fim <= inicio) {
    return { horarioInvalido: true };
  }

  return null;
}

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-disponibilidade-usuario',
  styleUrl: './disponibilidade-usuario.css',
  templateUrl: './disponibilidade-usuario.html',
})
export class DisponibilidadeUsuario implements OnInit {
  private route = inject(ActivatedRoute);
  private usuarioService = inject(UsuarioService);

  usuario: Usuario | undefined;
  mensagem = '';

  diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'];

  form = new FormGroup({
    dias: new FormArray(this.diasDaSemana.map((dia) => this.criarDia(dia))),
  });

  get dias() {
    return this.form.controls.dias;
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.usuario = this.usuarioService.buscarPorId(id);

    if (this.usuario) {
      this.dias.patchValue(this.usuario.horarios);
    }
  }

  criarDia(dia: string) {
    return new FormGroup(
      {
        dia: new FormControl(dia, { nonNullable: true }),
        disponivel: new FormControl(false, { nonNullable: true }),
        inicio: new FormControl('', { nonNullable: true }),
        fim: new FormControl('', { nonNullable: true }),
      },
      { validators: validarHorario },
    );
  }

  salvar(): void {
    if (this.form.invalid || !this.usuario) {
      return;
    }

    this.usuarioService.salvarHorarios(this.usuario.id, this.dias.getRawValue());
    this.mensagem = 'Disponibilidade salva!';
  }
}