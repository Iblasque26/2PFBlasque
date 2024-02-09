import { Injectable } from "@angular/core";
import { Curso } from "./models";
import { delay, of } from "rxjs";

let cursos: Curso[] = [
    {
        id: 1,
        name: 'Angular',
        createdAt: new Date(),
    },
    {
        id: 2,
        name: 'Js',
        createdAt: new Date(),
    },
    {
        id: 3,
        name: 'React',
        createdAt: new Date(),
    },
];

@Injectable()
export class CursosService {

    getCursos() {
        return of(cursos).pipe(delay(1500));
    }

    deleteCursoById(id: number) {
        cursos = cursos.filter((el) => el.id != id);;
        return this.getCursos();
    }
}