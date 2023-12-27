import { Component, ViewChild } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ForschungsFrageService } from '@app/core';
import { map } from 'rxjs/operators';
import { ForschungsfragenModel } from 'src/app/core/models/forschungsfrage.model';
import { ConfirmationDialogComponent } from 'src/app/shared/components/dialog/confirm-dialog.component';

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
  @ViewChild('confirmDialog') confirmDialog!: ConfirmationDialogComponent;

  constructor(
    private auth: AuthService,
    private forschungsfrageService: ForschungsFrageService,
  ) {}

  ngOnInit() {
    this.subscribeToForschungsfragen();
    this.fetchAllForschungsfragen();
  }

  subscribeToForschungsfragen() {
    this.forschungsfrageService.forschungsfragen$.subscribe(
      fragen => this.forschungsfragen = fragen,
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

  handleFreeze() {
    // Implementation of handleFreeze
  }

  openDialog() {
    this.confirmDialog.forschungsfrage = this.forschungsfrage;
    this.isDialogOpen = true;
  }

  closeDialog(success: boolean) {
    this.isDialogOpen = false;
    if (success) {
      this.forschungsfrage = ''; // Clear the input field on successful submission
    }
  }
}
