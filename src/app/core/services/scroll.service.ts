import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private featuresSection: HTMLElement | null = null;

  setFeaturesSection(element: HTMLElement): void {
    this.featuresSection = element;
  }

 scrollToFeatures(): void {
  if (this.featuresSection) {
    const offsetTop = this.featuresSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop - 100,
      behavior: 'smooth'
    });
  } else {
    window.scrollBy({ top: 500, behavior: 'smooth' });
  }
}
}
