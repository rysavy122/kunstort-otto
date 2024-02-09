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
  selectedFile: File | null = null;
  title = 'Decoded ID Token';
  user$ = this.auth.user$;
  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));
  isDialogOpen: boolean = false;
  isFreezeDialogOpen: boolean = false;
  VKb2xiYiQ2: boolean = false;


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
      this.VKb2xiYiQ2 = state;
    });
  }
  toggleForschungsfragen() {
    this.isExpanded = !this.isExpanded;
  }
  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }

  fetchAllForschungsfragen() {
    this.forschungsfrageService.getAllForschungsfragen().subscribe();
  }

  changePage(page: number) {
    this.currentPage = page;
  }
  get paginatedForschungsfragen() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.forschungsfragen.slice(startIndex, startIndex + this.itemsPerPage);
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.match('image.*')) {
        alert('Please select an image file.');
        return;
      }
      this.selectedFile = file;
    }
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


  handleSubmit() {
    if (!this.forschungsfrage.trim()) return;

    // Assuming 'selectedFile' is the state holding the selected image file
    this.forschungsfrageService.createForschungsfrage(this.forschungsfrage, this.selectedFile)
      .subscribe({
        next: (response) => {
          console.log('Forschungsfrage saved:', response);
          this.closeDialog(true); // Emit true on successful submission
          // Optionally reset the selected file
          this.selectedFile = null;
        },
        error: (error) => {
          console.error('Error saving Forschungsfrage:', error);
          this.closeDialog(false); // Emit false on error
        }
      });
  }

  openConfirmDialog() {
    if (this.selectedFile) {
      this.confirmDialog.imageFile = this.selectedFile;
      this.confirmDialog.forschungsfrage = this.forschungsfrage;
      this.confirmDialog.isOpen = true;
    } else {
      // Handle the case where no file is selected
      // You may want to alert the user or handle this scenario differently
      console.log("No File Selected")
      alert("Kein Logo ausgewählt")
    }
  }
  closeDialog(success: boolean) {
    this.isDialogOpen = false;
    this.isFreezeDialogOpen = false;
    if (success) {
      this.forschungsfrage = ''; // Clear the input field on successful submission
    }
  }



  openFreezeDialog() {
    this.isFreezeDialogOpen = true;
  }

  unfreezePolylog() {
    this.freezePolylogService.setFreezeState(false);
    if(this.VKb2xiYiQ2){
      this.openFreezeDialog();
    }
    else {
      this.openFreezeDialog();
    }
  }


}
