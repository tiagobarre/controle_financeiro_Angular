import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tipo } from 'src/app/Models/Tipo';

@Injectable({
  providedIn: 'root'
})
export class TiposService {

URL = 'api/Tipos';

constructor(private http: HttpClient) { }

GetTipos(): Observable<Tipo[]>{
  return this.http.get<Tipo[]>(this.URL);
}

}
