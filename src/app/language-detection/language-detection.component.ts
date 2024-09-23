import { Component } from '@angular/core';
import { LanguageDetectionService } from '../services/language-detection.service';
import { Detected, Language } from '../model';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css'],
})
export class LanguageDetectionComponent {
  public text: string = '';
  public cleanCheck: boolean = false;
  public detectedLanguages: Language[] = [];

  constructor(private languageDetectionService: LanguageDetectionService) {}

  detectLanguages(): void {
    if (!this.text) {
      alert('Text area cannot be empty.');
      return;
    }
    this.languageDetectionService
      .detectLanguages(this.text, this.cleanCheck)
      .subscribe(
        (res) => {
          this.detectedLanguages = res.detectedLangs;
        },
        (err) => {
          alert(`Error: ${err.error.message}`);
        }
      );
  }
}
