import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../Models/Categoria';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  URL = '';

constructor(private http: HttpClient ) { }

GetCategorias(): Observable<Categoria[]>{
  return this.http.get<Categoria[]>(this.URL)
}

GetCategoriasID(CategoriaId: number): Observable<Categoria>{
  const apiURL = `${this.URL}/${CategoriaId}`;
  return this.http.get<Categoria>(apiURL);
}

}
