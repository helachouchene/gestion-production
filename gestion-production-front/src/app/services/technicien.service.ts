import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technicien } from '../modules/technicien/technicien.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicienService {

  private apiUrl = 'http://localhost:8080/api/techniciens';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Technicien[]> {
    return this.http.get<Technicien[]>(this.apiUrl);
  }

  add(technicien: Technicien): Observable<Technicien> {
    return this.http.post<Technicien>(this.apiUrl, technicien);
  }
  update(id: number, technicien: Technicien): Observable<Technicien> {
    return this.http.put<Technicien>(`${this.apiUrl}/${id}`, technicien);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
