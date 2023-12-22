import { Component, OnInit } from '@angular/core';
import { MessageService } from '@app/core';
import * as paper from 'paper';
@Component({
  selector: 'app-mein-plakat',
  templateUrl: './mein-plakat.component.html',
})
export class MeinPlakatComponent implements OnInit {
  svgPaths: string[] = [];
  svgContent: string = '';
  originalSvgContent: string = '';
  svgHeight: string = '300px';
  svgWidth: string = '300px';


  constructor(
    public messageService: MessageService,
  ) {}
  public editorData = '<p>Initial content of the editor.</p>';
  

  ngOnInit(): void {
    paper.setup('paperCanvas');

  }



  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file && file.type === "image/svg+xml") {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.originalSvgContent = e.target.result;
        this.svgContent = e.target.result;
        this.parseSVG(this.svgContent);
      };
      reader.readAsText(file);
    }
  }
  revertToOriginal(): void {
    this.svgContent = this.originalSvgContent;
    this.parseSVG(this.svgContent);
  }

  parseSVG(svgContent: string): void {
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(svgContent, "image/svg+xml");
    const paths = svgDoc.querySelectorAll('path');
    this.svgPaths = [];
    paths.forEach((path) => {
      this.svgPaths.push(path.getAttribute('d') || '');
    });
    console.log("Svg Pfade", paths);
  }
  rearrangePaths(): void {
    if (!this.svgContent) return;
  
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(this.svgContent, "image/svg+xml");
    const svgElement = svgDoc.querySelector('svg');
  
    if (!svgElement) return;
  
    const containerWidth = parseInt(this.svgWidth, 10);
    const containerHeight = parseInt(this.svgHeight, 10);
  
    const paths = Array.from(svgElement.querySelectorAll('path'));
  
    paths.forEach(path => {
      let d = path.getAttribute('d') || '';
      
      d = d.replace(/([0-9]+\.?[0-9]*)/g, (match, offset, string) => {
        const num = parseFloat(match);
        let randomAdjustment = (Math.random() * 200 - 10);
        if (offset % 2 === 0) { 
          return Math.min(Math.max(num + randomAdjustment, 10), containerWidth).toFixed(2);
        } else { 
          return Math.min(Math.max(num + randomAdjustment, 10), containerHeight).toFixed(2);
        }
      });
      
      path.setAttribute('d', d);
    });
  
    const serializer = new XMLSerializer();
    this.svgContent = serializer.serializeToString(svgDoc);
  }
  
  
  shuffleArray(array: any[]): void {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }  
}
