import { Component, Input } from '@angular/core';
import { Entity } from '../model';

@Component({
  selector: 'app-entity-extraction-results',
  templateUrl: './entity-extraction-results.component.html',
  styleUrls: ['./entity-extraction-results.component.css'],
})
export class EntityExtractionResultsComponent {
  @Input() res: Entity = { annotations: [] };

  constructor() {}
}
