import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/card/card';

@Injectable({
  providedIn: 'root',
})
export class CardRepositoryService {
  private cardApiUrl: String =
    'https://portfoliobackend-zk6w.onrender.com:/card/'; // Provide localhost url for development purposes
  private httpClient: HttpClient = inject(HttpClient);

  constructor() {}

  public findAll(): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.cardApiUrl + 'all');
  }

  public findOneById(id: String): Observable<Card> {
    return this.httpClient.get<Card>(this.cardApiUrl + `details?id=${id}`);
  }

  public create(card: Card): Observable<any> {
    return this.httpClient.post<any>(this.cardApiUrl + 'create', card);
  }

  public update(card: Card, id: String): Observable<any> {
    return this.httpClient.put<any>(this.cardApiUrl + `update?id=${id}`, card);
  }

  public delete(id: String): Observable<any> {
    return this.httpClient.delete<any>(this.cardApiUrl + `delete?id=${id}`);
  }
}
