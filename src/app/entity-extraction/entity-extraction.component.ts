import { Component } from '@angular/core';
import { EntityExtractionService } from '../services/entity-extraction.service';
import { Entity } from '../model';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css'],
})
export class EntityExtractionComponent {
  public text: string = '';
  public minConfidence: number = 0.5;
  public imageCheck: boolean = false;
  public abstractCheck: boolean = false;
  public categoriesCheck: boolean = false;
  private include: string[] = [];
  public res: Entity = { annotations: [] };

  constructor(private entityExtractionService: EntityExtractionService) {}

  extractEntities(): void {
    if (!this.text) {
      alert('Text area cannot be empty.');
      return;
    }
    this.include = [
      `${this.imageCheck ? 'image' : ''}`,
      `${this.abstractCheck ? 'abstract' : ''}`,
      `${this.categoriesCheck ? 'categories' : ''}`,
    ].filter((str) => str !== '');
    this.entityExtractionService
      .extraxtEntities(this.text, this.minConfidence, this.include)
      .subscribe((res) => {
        this.res = res;
      });
  }
}
