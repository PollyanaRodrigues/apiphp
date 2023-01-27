import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';

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

  //Contrutor
  constructor(
    private http: HttpClient
    ){
  }

  //Inicializador
  ngOnInit() {
    
  }

  //Cadastro
  cadastro():void{
    alert("cadastro!");
  }

  //Seleção
  selecao():void{
    alert("seleção!");
  }
  //Alterar
  alterar(){
    alert("alterar")
  }

  //Remover
  remover():void{
    alert("Remover!");
  }
  
}
