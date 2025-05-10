import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrdreFabrication } from '../modules/ordre-fabrication/ordre-fabrication.model';

@Injectable({
  providedIn: 'root'
})
export class OrdreFabricationService {
  private apiUrl = 'http://localhost:8080/api/ordres-fabrication';

  constructor(private http: HttpClient) {}

  getAll(): Observable<OrdreFabrication[]> {
    return this.http.get<OrdreFabrication[]>(this.apiUrl);
  }

  getById(id: number): Observable<OrdreFabrication> {
    return this.http.get<OrdreFabrication>(`${this.apiUrl}/${id}`);
  }

  create(ordre: OrdreFabrication): Observable<OrdreFabrication> {
    return this.http.post<OrdreFabrication>(this.apiUrl, ordre);
  }

  update(id: number, ordre: OrdreFabrication): Observable<OrdreFabrication> {
    return this.http.put<OrdreFabrication>(`${this.apiUrl}/${id}`, ordre);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
