import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from '../models/section/section';

@Injectable({
  providedIn: 'root',
})
export class SectionRepositoryService {
  private cardApiUrl: String =
    'https://portfoliobackend-zk6w.onrender.com/section/'; // Provide localhost url for development purposes
  private httpClient: HttpClient = inject(HttpClient);

  constructor() {}

  public findAll(): Observable<Section[]> {
    return this.httpClient.get<Section[]>(this.cardApiUrl + 'all');
  }

  public findOneById(id: String): Observable<Section> {
    return this.httpClient.get<Section>(this.cardApiUrl + `details?id=${id}`);
  }

  public create(section: Section): Observable<any> {
    return this.httpClient.post<any>(this.cardApiUrl + 'create', section);
  }

  public update(section: Section, id: String): Observable<any> {
    return this.httpClient.put<any>(
      this.cardApiUrl + `update?id=${id}`,
      section
    );
  }

  public delete(id: String): Observable<any> {
    return this.httpClient.delete<any>(this.cardApiUrl + `delete?id=${id}`);
  }
}
