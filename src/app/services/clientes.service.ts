import { Injectable } from '@angular/core';
import { Cliente } from '../models/clientes/clientes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private apiUrl = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl);
  }

  buscarClientes(sharedKey: string): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiUrl}/search?sharedKey=${sharedKey}`);
  }

  crearCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente);
  }

  buscarClientesAvanzado(filtros: { email?: string; phone?: string; dateAdded?: string }) {
    const params = new URLSearchParams();
    if (filtros.email) params.append('email', filtros.email);
    if (filtros.phone) params.append('phone', filtros.phone);
    if (filtros.dateAdded) params.append('dateAdded', filtros.dateAdded);

    return this.http.get<Cliente[]>(`${this.apiUrl}/clientes/buscar-avanzado?${params.toString()}`);
  }
  exportarClientes(): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/export`, { responseType: 'blob' });
  }
}
