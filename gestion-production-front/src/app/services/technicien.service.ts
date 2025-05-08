import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technicien } from '../models/technicien.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TechnicienService {
  private baseUrl = 'http://localhost:8080/api/techniciens';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Technicien[]> {
    return this.http.get<Technicien[]>(this.baseUrl);
  }

  getById(id: number): Observable<Technicien> {
    return this.http.get<Technicien>(`${this.baseUrl}/${id}`);
  }

  create(technicien: Technicien): Observable<Technicien> {
    return this.http.post<Technicien>(this.baseUrl, technicien);
  }

  update(id: number, technicien: Technicien): Observable<Technicien> {
    return this.http.put<Technicien>(`${this.baseUrl}/${id}`, technicien);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
