import { Component, OnInit } from '@angular/core';
import { History } from '../model';
import { StoreHistoryService } from '../services/store-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  public history: History[] = [];

  constructor(private storeHistoryService: StoreHistoryService) {}

  ngOnInit(): void {
    this.history = this.storeHistoryService.history;
  }
}
