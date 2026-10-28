import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UsuarioService } from '../../services/usuario-service';


@Component({
  imports: [AsyncPipe, RouterLink],
  selector: 'app-lista-usuarios',
  styleUrl: './lista-usuarios.css',
  templateUrl: './lista-usuarios.html',
})
export class ListaUsuarios {
  private usuarioService = inject(UsuarioService);

  usuarios$ = this.usuarioService.usuarios$
}
