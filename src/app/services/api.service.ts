import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiurl = 'https://localhost:7293/api/Estudiantes';
  private apirulestudiantepost = 'https://localhost:7293/api/Estudiantes';
  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl);
  }
  deleteData(value: any): Observable<any> {
    return this.http.post(this.apirulestudiantepost, value);
  }
  createEstudiante(value: any):Observable<any>{
    return this.http.post(this.apirulestudiantepost, value);
  }
}
