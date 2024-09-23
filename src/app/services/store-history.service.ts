import { Injectable } from '@angular/core';
import { History } from '../model';

@Injectable({
  providedIn: 'root',
})
export class StoreHistoryService {
  public history: History[] = [];

  constructor() {}
}
