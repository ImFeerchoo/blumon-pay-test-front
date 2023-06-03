import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Terminal } from '../interfaces/terminal.interface';

@Injectable({
  providedIn: 'root'
})
export class TerminalService {

  baseUrl: string = 'http://localhost:8080/terminals';

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Terminal[]>{
    return this.httpClient.get<Terminal[]>(`${this.baseUrl}/getAll`).pipe(
      catchError(e => of([]))
    );
  }

  save(terminal: Terminal): Observable<Terminal>{
    return this.httpClient.post<Terminal>(`${this.baseUrl}/save`, terminal);
  }

  update(terminal: Terminal): Observable<Terminal>{
    return this.httpClient.put<Terminal>(`${this.baseUrl}/update/${terminal.idTerminal}`, terminal);
  }

  delete(id: number): Observable<Terminal>{
    return this.httpClient.delete<Terminal>(`${this.baseUrl}/delete/${id}`);
  }
}
