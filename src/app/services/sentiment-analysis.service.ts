import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SentimentAnalysis } from '../model';

@Injectable({
  providedIn: 'root',
})
export class SentimentAnalysisService {
  private readonly apiUrl: string = environment.api;
  private readonly url: string = '/sent/v1/';

  constructor(private httpClient: HttpClient) {}

  analyseSentiment(text: string, lang: string): Observable<SentimentAnalysis> {
    console.log('Lnaguage: ' + lang);
    return this.httpClient.get<SentimentAnalysis>(`${this.apiUrl}${this.url}`, {
      params: {
        text,
        lang,
        token: localStorage.getItem('token') ?? '',
      },
    });
  }
}
