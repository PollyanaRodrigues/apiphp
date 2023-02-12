import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'; // lista elementos da tabela banco de dados
import { Curso } from './curso';


@Injectable({
  providedIn: 'root'
})


export class CursoService implements OnInit {

  //URL base 
  url = "http://localhost/api/php/";

  //Vetor
  vetor: Curso[] = [];

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    
  }

  //Obter todos os cursos
 
  obterCursos():Observable<Curso[]>{
    return this.http.get(this.url + "listar").pipe(
      map((res: any) => {
        this.vetor = res['cursos'];
        return this.vetor;
      })
    )
  }
  
}
