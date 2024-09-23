import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreHistoryService } from './store-history.service';

@Injectable()
export class HistoryService implements HttpInterceptor {
  constructor(private storeHistoryService: StoreHistoryService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.storeHistoryService.history.push({
      timeDate: new Date(),
      method: req.method,
      urlWithParams: req.urlWithParams,
    });
    return next.handle(req);
  }
}
