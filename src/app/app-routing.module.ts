import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TokenComponent } from './token/token.component';
import { TextSimilarityComponent } from './text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './sentiment-analysis/sentiment-analysis.component';
import { EntityExtractionComponent } from './entity-extraction/entity-extraction.component';
import { HistoryComponent } from './history/history.component';
import { tokenGuard } from './token.guard';
//29584a4ea57643aa92c785ebc812fa37
const routes: Routes = [
  {
    path: '',
    component: TokenComponent,
  },
  {
    path: 'textsimilarity',
    component: TextSimilarityComponent,
    canActivate: [tokenGuard],
  },
  {
    path: 'languagedetection',
    component: LanguageDetectionComponent,
    canActivate: [tokenGuard],
  },
  {
    path: 'sentimentanalysis',
    component: SentimentAnalysisComponent,
    canActivate: [tokenGuard],
  },
  {
    path: 'entityextraciton',
    component: EntityExtractionComponent,
    canActivate: [tokenGuard],
  },
  {
    path: 'history',
    component: HistoryComponent,
    canActivate: [tokenGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
