import { Component, ViewChild, Output, Input } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ForschungsFrageService } from '@app/core';
import { map } from 'rxjs/operators';
import { ForschungsfragenModel } from 'src/app/core/models/forschungsfrage.model';
import { ConfirmationDialogComponent } from 'src/app/shared/components/dialog/confirm-dialog.component';
import { ConfirmationFreezeDialogComponent } from 'src/app/shared/components/dialog/confirm-freeze-dialog.component';
import { FreezePolylogService } from 'src/app/core/services/freeze-polylog.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  forschungsfrage: string = '';
  forschungsfragen: ForschungsfragenModel[] = [];
  title = 'Decoded ID Token';
  user$ = this.auth.user$;
  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));
  isDialogOpen: boolean = false;
  isFreezeDialogOpen: boolean = false;
  freezePolylog: boolean = false;


    // Pagination properties
    currentPage: number = 1;
    itemsPerPage: number = 15;
    totalItems: number = 0;

    // Expanded/Collapsed state
    isExpanded: boolean = false;
  @ViewChild('confirmDialog') confirmDialog!: ConfirmationDialogComponent;
  @ViewChild('confirmFreezeDialog') confirmFreezeDialog!: ConfirmationFreezeDialogComponent;


  constructor(
    private auth: AuthService,
    private forschungsfrageService: ForschungsFrageService,
    private freezePolylogService: FreezePolylogService
  ) {}

  ngOnInit() {
    this.subscribeToForschungsfragen();
    this.fetchAllForschungsfragen();
    this.freezePolylogService.getFreezeState().subscribe((state) => {
      this.freezePolylog = state;
    });
  }
  toggleForschungsfragen() {
    this.isExpanded = !this.isExpanded;
  }
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  changePage(page: number) {
    this.currentPage = page;
  }
  get paginatedForschungsfragen() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.forschungsfragen.slice(startIndex, startIndex + this.itemsPerPage);
  }

  subscribeToForschungsfragen() {
    this.forschungsfrageService.forschungsfragen$.subscribe(
      fragen => {
        this.forschungsfragen = fragen;
        this.totalItems = fragen.length; // Set totalItems here
      },
      error => console.error('Error fetching Forschungsfragen:', error)
    );
  }

  fetchAllForschungsfragen() {
    this.forschungsfrageService.getAllForschungsfragen().subscribe();
  }

  handleSubmit() {
    if (!this.forschungsfrage.trim()) return;

    this.forschungsfrageService.createForschungsfrage(this.forschungsfrage)
      .subscribe({
        next: (response) => {
          console.log('Forschungsfrage saved:', response);
          this.closeDialog(true); // Emit true on successful submission
        },
        error: (error) => {
          console.error('Error saving Forschungsfrage:', error);
          this.closeDialog(false); // Emit false on error
        }
      });
  }

  openDialog() {
    this.confirmDialog.forschungsfrage = this.forschungsfrage;
    this.isDialogOpen = true;
  }
  openFreezeDialog() {
    this.isFreezeDialogOpen = true;
  }

  unfreezePolylog() {
    this.freezePolylogService.setFreezeState(false);
    if(this.freezePolylog){
      this.openFreezeDialog();
    }
    else {
      this.openFreezeDialog();
    }
  }

  closeDialog(success: boolean) {
    this.isDialogOpen = false;
    this.isFreezeDialogOpen = false;
    if (success) {
      this.forschungsfrage = ''; // Clear the input field on successful submission
    }
  }
}
