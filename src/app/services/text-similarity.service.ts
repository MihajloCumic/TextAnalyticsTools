import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Similarity } from '../model';

@Injectable({
  providedIn: 'root',
})
export class TextSimilarityService {
  private readonly apiUrl: string = environment.api;
  private readonly url: string = '/sim/v1/';

  constructor(private httpClient: HttpClient) {}

  getSimilarity(text1: string, text2: string): Observable<Similarity> {
    return this.httpClient.get<Similarity>(`${this.apiUrl}${this.url}`, {
      params: {
        text1,
        text2,
        token: localStorage.getItem('token') ?? '',
      },
    });
  }
}
