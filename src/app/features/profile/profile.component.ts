import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ForschungsFrageService } from '@app/core';
import { map } from 'rxjs/operators';
import { ForschungsfragenModel } from 'src/app/core/models/forschungsfrage.model';
import { ConfirmationDialogComponent } from 'src/app/shared/components/dialog/confirm-dialog.component';
import { ConfirmationFreezeDialogComponent } from 'src/app/shared/components/dialog/confirm-freeze-dialog.component';
import { FreezePolylogService } from 'src/app/core/services/freeze-polylog.service';
import { ToastrService } from 'ngx-toastr';
import { RoleService } from 'src/app/core/services/role.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  forschungsfrage: string = '';
  forschungsfragen: ForschungsfragenModel[] = [];
  selectedFile: File | null = null;
  title = 'Decoded ID Token';
  user$ = this.auth.user$;
  code$ = this.user$.pipe(map((user) => JSON.stringify(user, null, 2)));
  role: string | null = null;
  isAdmin: boolean = false;
  roleAvatarMap: { [key: string]: string } = {
    'Gast': 'https://ottoblob.blob.core.windows.net/images/*image00040 Kopie.png',
    'Institution': 'https://ottoblob.blob.core.windows.net/images/*image00021 Kopie.png',
    'Team': 'https://ottoblob.blob.core.windows.net/images/*image00013 Kopie 2.png',
    'Künstler': 'https://ottoblob.blob.core.windows.net/images/*image00042 Kopie.png'
  };


  currentPage: number = 1;
  itemsPerPage: number = 5;
  totalItems: number = 0;

  isExpanded: boolean = false;
  isDialogOpen: boolean = false;
  isFreezeDialogOpen: boolean = false;
  VKb2xiYiQ2: boolean = false;

  @ViewChild('confirmDialog') confirmDialog!: ConfirmationDialogComponent;
  @ViewChild('confirmFreezeDialog') confirmFreezeDialog!: ConfirmationFreezeDialogComponent;
  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private forschungsfrageService: ForschungsFrageService,
    private freezePolylogService: FreezePolylogService,
    public roleService: RoleService,
    private route: ActivatedRoute

  ) {}

  ngOnInit() {
    this.subscribeToForschungsfragen();
    this.fetchAllForschungsfragen();
    this.freezePolylogService.getFreezeState().subscribe((state) => {
      this.VKb2xiYiQ2 = state;
    });
    this.role = this.roleService.getRole();
    this.isAdmin = localStorage.getItem('isAdmin') === 'true';


    console.log(this.role);



    this.auth.user$.subscribe(user => {
      console.log('User after login:', user);
    });
  }
  toggleForschungsfragen() {
    this.isExpanded = !this.isExpanded;
  }

  get totalPages(): number {
    return Math.ceil(this.totalItems / this.itemsPerPage);
  }
  get avatarUrl(): string {
    return this.roleAvatarMap[this.role || ''];
  }

  fetchAllForschungsfragen() {
    this.forschungsfrageService.getAllForschungsfragen().subscribe();
  }

  changePage(page: number) {
    if(this.itemsPerPage > 0)
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
        this.toastr.warning('Wähle ein Logo für die Forschungsfrage!', 'Achtung');
        return;
      }
      this.selectedFile = file;
    }
  }

  subscribeToForschungsfragen() {
    this.forschungsfrageService.forschungsfragen$.subscribe(
      fragen => {
        this.forschungsfragen = fragen;
        this.totalItems = fragen.length;
      },
      error => console.error('Error fetching Forschungsfragen:', error)
    );
  }

  clearFileInput() {
    if (this.fileInput && this.fileInput.nativeElement) {
      this.fileInput.nativeElement.value = '';
      this.selectedFile = null;
    }
  }

  openConfirmDialog() {
    if (this.selectedFile) {
      this.confirmDialog.imageFile = this.selectedFile;
      this.confirmDialog.forschungsfrage = this.forschungsfrage;
      this.confirmDialog.isOpen = true;
    } else {
      console.log("No File Selected");
      this.toastr.info('Kein Logo für die Forschungsfrage ausgewählt!', 'Info');
    }
  }

  closeDialog(success: boolean) {
    this.isDialogOpen = false;
    this.isFreezeDialogOpen = false;
    if (success) {
      this.toastr.success('Forschungsfrage erfolgreich gestellt!', 'Success');
      this.forschungsfrage = '';
      this.selectedFile = null;
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
