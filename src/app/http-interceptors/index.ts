import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { HistoryService } from '../services/history.service';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HistoryService, multi: true },
];
