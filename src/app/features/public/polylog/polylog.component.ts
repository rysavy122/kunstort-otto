import { Component, OnInit } from '@angular/core';
import { ForschungsFrageService } from '@app/core';
import { ForschungsfragenModel } from 'src/app/core/models/forschungsfrage.model'; // Adjust path as needed

@Component({
  selector: 'app-polylog',
  templateUrl: './polylog.component.html',
})
export class PolylogComponent implements OnInit {
  message? = '';
  errorMessage = 'Fehler beim laden der Forschungsfrage.';

  constructor(private forschungsfrageService: ForschungsFrageService) {}
  ngOnInit(): void {
    this.fetchLatestForschungsfrage();
    this.listenForNewForschungsfrage();
  }

  fetchLatestForschungsfrage() {
    this.forschungsfrageService.getLatestForschungsfrage().subscribe({
      next: (forschungsfrage: ForschungsfragenModel) => {
        this.message = forschungsfrage.title;
      },
      error: () => {
        this.message = this.errorMessage;
      }
    });
  }

  listenForNewForschungsfrage() {
    this.forschungsfrageService.forschungsfragen$.subscribe(() => {
      this.fetchLatestForschungsfrage();
    });
  }
  newComment(){
    console.error("New Comment")
  }
}
