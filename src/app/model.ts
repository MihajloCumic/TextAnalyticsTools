export interface Similarity {
  similarity: number;
}

export interface Detected {
  detectedLangs: Language[];
}

export interface Language {
  lang: string;
  confidence: number;
}

export interface Entity {
  annotations: {
    spot: string;
    abstract: string;
    image: { full: string; thumbnail: string };
    categories: string[];
  }[];
}

export interface Sentiment {
  score: number;
  type: string;
}

export interface SentimentAnalysis {
  sentiment: Sentiment;
}

export class RGBColor {
  constructor(public r: number, public g: number, public b: number) {}
  toString(): string {
    return `rgb(${this.r},${this.g},${this.b})`;
  }
  setNewRGBValues(r: number, g: number, b: number): void {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}

export interface History {
  timeDate: Date;
  method: string;
  urlWithParams: string;
}
