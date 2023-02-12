import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit{

  //URL base
  url = "http://localhost/api/php/"; 

  //Vetor de Cursos
  vetor: Curso[] = [];


  //Objeto da classe Curso
  curso = new Curso();
  //Contrutor
  constructor(
    private http: HttpClient,
    private curso_servico: CursoService
    ){}

  //Inicializador
  ngOnInit() {
    //Ao inicializar, litar os cursos
    this.selecao()
  }

  //Cadastro
  cadastro():void{
    alert("cadastro!");
  }

  //Seleção
  selecao(){
    this.curso_servico.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
  }
  //Alterar
  alterar(): void{
    alert("alterar")
  }

  //Remover
  remover():void{
    alert("Remover!");
  }
  
}
