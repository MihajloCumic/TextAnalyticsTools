import { Component } from '@angular/core';
import { TextSimilarityService } from '../services/text-similarity.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css'],
})
export class TextSimilarityComponent {
  public text1: string = '';
  public text2: string = '';
  public similarity: number = -1;

  constructor(private textSimilarityService: TextSimilarityService) {}

  getSimilarity(): void {
    if (!this.text1 || !this.text2) {
      alert('Text areas cannot be empty.');
      return;
    }
    this.textSimilarityService.getSimilarity(this.text1, this.text2).subscribe(
      (similarity) => {
        this.similarity = Math.round(similarity.similarity * 100);
      },
      (err) => {
        alert(`Error: ${err.error.message}`);
      }
    );
  }
}
