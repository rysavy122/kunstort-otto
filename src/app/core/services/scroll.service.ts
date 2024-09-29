import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private featuresSection: HTMLElement | null = null;

  setFeaturesSection(element: HTMLElement): void {
    this.featuresSection = element;
  }

 // Method to scroll down manually by 500px (or however much you'd like)
 scrollToFeatures(): void {
  if (this.featuresSection) {
    const offsetTop = this.featuresSection.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: offsetTop - 100,  // Adjust the offset if you want more/less scroll
      behavior: 'smooth'     // Smooth scrolling
    });
  } else {
    // Fallback to scroll down a fixed amount if the element is not found
    window.scrollBy({ top: 500, behavior: 'smooth' });
  }
}
}
