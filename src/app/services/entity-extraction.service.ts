import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Entity } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntityExtractionService {
  private readonly apiUrl: string = environment.api;
  private readonly url: string = '/nex/v1/';

  constructor(private httpClient: HttpClient) {}

  extraxtEntities(
    text: string,
    minConfidence: number,
    include: string[]
  ): Observable<Entity> {
    return this.httpClient.get<Entity>(`${this.apiUrl}${this.url}`, {
      params: {
        lang: 'en',
        text,
        'min-confidence': minConfidence,
        ...(include && { include: include }),
        token: localStorage.getItem('token') ?? '',
      },
    });
  }
}
