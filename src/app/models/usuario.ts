export interface Horario{
    inicio : string;
    fim : string;
    dia : string;
    disponivel : boolean;
}

export interface Usuario {
    id: number;
    nome: string;
    horarios: Horario[];
}
