import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiurl = 'https://localhost:7293/api/Estudiantes';

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl);
  }
  deleteData(id: number): Observable<void> {
    const url = `${this.apiurl}/${id}`; // Ajusta el endpoint según tu API
    return this.http.delete<void>(url);
  }
}
