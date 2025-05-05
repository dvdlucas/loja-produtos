import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseUrl = 'http://localhost:3000/produtos';

  constructor(private http: HttpClient) {}

  listar(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  cadastrar(produto: any): Observable<any> {
  return this.http.post('http://localhost:3000/produtos', produto);
  }
}

