import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursoComponent } from './curso/curso.component';

import {HttpClientModule} from '@angular/common/http'; //aula 3.c
import { FormsModule } from '@angular/forms'; //aula 3.c

@NgModule({
  declarations: [
    AppComponent,
    CursoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,  //aula 3.c
    FormsModule        //aula 3.c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
