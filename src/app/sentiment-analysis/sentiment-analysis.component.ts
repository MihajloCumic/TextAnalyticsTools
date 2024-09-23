import { Component } from '@angular/core';
import { SentimentAnalysisService } from '../services/sentiment-analysis.service';
import { RGBColor, Sentiment } from '../model';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css'],
})
export class SentimentAnalysisComponent {
  public text: string = '';
  public lang: string = 'auto';
  public greenColor: RGBColor = new RGBColor(170, 255, 0);
  public redColor: RGBColor = new RGBColor(255, 0, 0);
  public displayColor: RGBColor = new RGBColor(0, 0, 0);
  public sentiment: Sentiment = {
    score: 0,
    type: '',
  };

  constructor(private sentimentAnalysisService: SentimentAnalysisService) {}

  analyseSentiment(): void {
    if (!this.text) {
      alert('Text area cannot be empty.');
      return;
    }
    this.sentimentAnalysisService
      .analyseSentiment(this.text, this.lang)
      .subscribe(
        (res) => {
          this.sentiment = res.sentiment;
          //this.changeRange(this.sentiment.score);
          this.interpolateRGB(
            this.redColor,
            this.greenColor,
            this.changeRange(this.sentiment.score)
          );
        },
        (err) => {
          alert(`Error: ${err.error.message}`);
        }
      );
  }

  private changeRange(oldValue: number): number {
    let oldMin = -1;
    let oldMax = 1;
    let newMin = 0;
    let newMax = 1;
    let oldRange = oldMax - oldMin;
    let newRange = newMax - newMin;
    return ((oldValue - oldMin) * newRange) / oldRange + newMin;
  }

  private interpolateRGB(a: RGBColor, b: RGBColor, t: number): void {
    let newR = a.r + (b.r - a.r) * t;
    let newG = a.g + (b.g - a.g) * t;
    let newB = a.b + (b.b - a.b) * t;
    this.displayColor.setNewRGBValues(newR, newG, newB);
  }
}
