import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Horario, Usuario} from '../models/usuario';

@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    private usuariosSubject = new BehaviorSubject<Usuario[]>([]);
    usuarios$ = this.usuariosSubject.asObservable();

    private proximoId = 1;

    adicionarUsuario(nome : string): void {

        const novoUsuario: Usuario = {
            id: this.proximoId,
            nome: nome,
            horarios: [],

        };
        this.proximoId++;

        this.usuariosSubject.next([...this.usuariosSubject.value, novoUsuario]);
    }

    buscarPorId(id : number) : Usuario | undefined {
        return this.usuariosSubject.value.find((usuario) => usuario.id === id);
    }

    salvarHorarios(id : number, horarios : Horario[]) : void {
        const usuariosAtualizados = 
        this.usuariosSubject.value
        .map((usuario) => usuario.id === id ? {...usuario, horarios: horarios} : usuario,);

        this.usuariosSubject.next(usuariosAtualizados);
    }




}
