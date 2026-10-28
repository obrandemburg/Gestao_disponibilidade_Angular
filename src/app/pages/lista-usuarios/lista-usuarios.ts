import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario-service';
import { ModalNovoUsuario } from '../../components/modal-novo-usuario/modal-novo-usuario';


@Component({
  imports: [AsyncPipe, RouterLink, ModalNovoUsuario],
  selector: 'app-lista-usuarios',
  styleUrl: './lista-usuarios.css',
  templateUrl: './lista-usuarios.html',
})
export class ListaUsuarios {
  private usuarioService = inject(UsuarioService);

  usuarios$ = this.usuarioService.usuarios$

  modalAberto = false;

  abrirModal(): void {
    this.modalAberto = true;
  }

  fecharModal(): void {
    this.modalAberto = false;
  }

  adicionarUsuario(nome: string): void {
    this.usuarioService.adicionarUsuario(nome);
    this.modalAberto = false;
  }
}
