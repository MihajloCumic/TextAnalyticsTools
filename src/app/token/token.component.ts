import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css'],
})
export class TokenComponent implements OnInit {
  //29584a4ea57643aa92c785ebc812fa37
  public token: string = '';

  constructor() {}

  ngOnInit(): void {
    this.token = localStorage.getItem('token') ?? '';
  }

  saveToken(): void {
    localStorage.setItem('token', this.token);
    alert(`Token: ${this.token} has been saved.`);
  }
}
