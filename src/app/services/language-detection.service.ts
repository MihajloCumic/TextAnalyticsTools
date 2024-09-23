import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Detected } from '../model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageDetectionService {
  private readonly apiUrl: string = environment.api;
  private readonly url: string = '/li/v1/';

  constructor(private httpClient: HttpClient) {}

  detectLanguages(text: string, clean: boolean): Observable<Detected> {
    return this.httpClient.get<Detected>(`${this.apiUrl}${this.url}`, {
      params: {
        text,
        clean,
        token: localStorage.getItem('token') ?? '',
      },
    });
  }
}
