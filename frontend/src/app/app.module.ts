import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tipo } from './Models/Tipo';
import { TiposService } from './Services/Tipos.service';
import { HttpClientModule } from '@angular/common/http'
import { CategoriasService } from './Services/Categorias.service';
import { Categoria } from './Models/Categoria';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [
    TiposService,
    HttpClientModule,
    CategoriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
