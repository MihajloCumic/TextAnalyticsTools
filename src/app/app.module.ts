import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenComponent } from './token/token.component';
import { FormsModule } from '@angular/forms';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { HttpClientModule } from '@angular/common/http';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { EntityExtractionResultsComponent } from './entity-extraction-results/entity-extraction-results.component';
import { httpInterceptorProviders } from './http-interceptors';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    TokenComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent,
    EntityExtractionComponent,
    EntityExtractionResultsComponent,
    HistoryComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
