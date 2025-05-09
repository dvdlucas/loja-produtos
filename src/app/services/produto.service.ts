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

  excluir(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  editar(id : number, produto: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, produto);
  }

  buscarPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

}

