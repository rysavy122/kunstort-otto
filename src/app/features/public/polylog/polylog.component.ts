import { Component, OnInit, ViewChild } from '@angular/core';
import { ForschungsFrageService } from '@app/core';
import { KommentarService } from 'src/app/core/services/kommentar-service';
import { ForschungsfragenModel } from 'src/app/core/models/forschungsfrage.model';
import { KommentarModel } from 'src/app/core/models/kommentar.model';
import { CommentDialogComponent } from 'src/app/shared/components/dialog/comment-dialog.component';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-polylog',
  templateUrl: './polylog.component.html',
})
export class PolylogComponent implements OnInit {
  forschungsfrage? = '';
  kommentare: KommentarModel[] = [];
  errorMessage = 'Fehler beim laden der Forschungsfrage.';
  isDialogOpen: boolean = false;
  @ViewChild('confirmDialog') commentDialog!: CommentDialogComponent;

  constructor(private forschungsfrageService: ForschungsFrageService,
    private sanitizer: DomSanitizer,
    private kommentarService: KommentarService) { }
  ngOnInit(): void {
    this.fetchLatestForschungsfrage();
    this.listenForNewForschungsfrage();
    this.loadKommentare();
  }

  fetchLatestForschungsfrage() {
    this.forschungsfrageService.getLatestForschungsfrage().subscribe({
      next: (forschungsfrage: ForschungsfragenModel) => {
        this.forschungsfrage = forschungsfrage.title;
      },
      error: () => {
        this.forschungsfrage = this.errorMessage;
      }
    });
  }
  getSafeHtml(content: string | undefined): SafeHtml | string {
    return content ? this.sanitizer.bypassSecurityTrustHtml(content) : '';
  }
  onCommentSubmitted(newKommentar: KommentarModel) {
    this.kommentare.push(newKommentar);
    this.loadKommentare();
  }

  loadKommentare() {
    this.kommentarService.getAllKommentare().subscribe(kommentare => {
      this.kommentare = kommentare;
    });
  }
  listenForNewForschungsfrage() {
    this.forschungsfrageService.forschungsfragen$.subscribe(() => {
      this.fetchLatestForschungsfrage();
    });
  }
  openDialog() {
    this.isDialogOpen = true;
  }
  closeDialog() {
    this.isDialogOpen = false;
  }

}
