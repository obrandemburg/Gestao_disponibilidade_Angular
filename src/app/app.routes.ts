import { Routes } from '@angular/router';
import { ListaUsuarios } from './pages/lista-usuarios/lista-usuarios';
import { DisponibilidadeUsuario } from './pages/disponibilidade-usuario/disponibilidade-usuario';


export const routes: Routes = [
    {path: '', component: ListaUsuarios},
    {path: 'usuario/:id', component: DisponibilidadeUsuario}
];
