import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdreFabrication } from '../models/ordre-fabrication.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdreFabricationService {
  private baseUrl = 'http://localhost:8080/api/ordres';

  constructor(private http: HttpClient) {}

  getAll(): Observable<OrdreFabrication[]> {
    return this.http.get<OrdreFabrication[]>(this.baseUrl);
  }

  getById(id: number): Observable<OrdreFabrication> {
    return this.http.get<OrdreFabrication>(`${this.baseUrl}/${id}`);
  }

  create(of: OrdreFabrication): Observable<OrdreFabrication> {
    return this.http.post<OrdreFabrication>(this.baseUrl, of);
  }

  update(id: number, of: OrdreFabrication): Observable<OrdreFabrication> {
    return this.http.put<OrdreFabrication>(`${this.baseUrl}/${id}`, of);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
