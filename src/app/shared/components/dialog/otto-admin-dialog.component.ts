import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment as env } from '../../../../environments/environment';

@Component({
  selector: 'app-otto-admin-dialog',
  template: `
    <div class="modal-container" *ngIf="isOpen">
      <div class="modal-backdrop">
        <div class="modal">
          <h2>Admin Zugang</h2>
          <h6 *ngIf="!isLockedOut">
            Bitte Admin Passwort eingeben, um als Teammitglied fortzufahren.
          </h6>
          <h6 *ngIf="isLockedOut" style="color: red;">
            Sie haben die maximale Anzahl von Versuchen erreicht. Bitte warten Sie {{ remainingTime }} Minuten.
          </h6>
          <div class="password-field" *ngIf="!isLockedOut">
            <input
              [type]="showPassword ? 'text' : 'password'"
              [(ngModel)]="adminPassword"
              style="width:90%;"
              placeholder="Admin Passwort"
            />
            <button (click)="togglePasswordVisibility()" class="icon-button-plakat">
              <svg *ngIf="!showPassword" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0"/>
              </svg>
              <svg *ngIf="showPassword" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
              </svg>
            </button>
          </div>
          <button class="submit-button" *ngIf="!isLockedOut" (click)="validateAdminPassword()">
            Bestätigen
          </button>
          <button class="close-button" (click)="closeDialog()">Zurück</button>
        </div>
      </div>
    </div>
  `,
})
export class OttoAdminDialogComponent implements OnInit {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<boolean>();
  @Output() adminAuthSuccess = new EventEmitter<boolean>();

  adminPassword: string = '';
  showPassword: boolean = false;
  isLockedOut = false;
  remainingTime = 0;

  private maxAttempts = 5;
  private lockoutTime = 60 * 60 * 1000; // 1 hour in milliseconds

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    this.checkLockout();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  validateAdminPassword() {
    const correctPassword = 'Otto-admin';
    const attempts = parseInt(localStorage.getItem('adminAttempts') || '0', 10);

    if (attempts >= this.maxAttempts) {
      this.handleLockout();
      return;
    }

    if (this.adminPassword === correctPassword) {
      this.toastr.success('Zugriff gewährt. Sie können sich jetzt als Teammitglied anmelden.', 'Erfolgreich');
      localStorage.removeItem('adminAttempts'); // Reset attempts on success
      this.adminAuthSuccess.emit(true);
      this.closeDialog(true);
    } else {
      this.adminPassword = ''; // Clear password
      const newAttempts = attempts + 1;
      const remainingAttempts = this.maxAttempts - newAttempts;

      localStorage.setItem('adminAttempts', newAttempts.toString());

      // Show a toast with the failed attempts and remaining attempts
      this.toastr.error(
        `Falsches Passwort. Versuche: ${newAttempts}/${this.maxAttempts}. Verbleibende Versuche: ${remainingAttempts}.`,
        'Fehler'
      );

      if (newAttempts >= this.maxAttempts) {
        this.handleLockout();
      }
    }
  }


  handleLockout() {
    const lockoutEnd = Date.now() + this.lockoutTime;
    localStorage.setItem('lockoutEnd', lockoutEnd.toString());
    this.checkLockout();
  }

  checkLockout() {
    const lockoutEnd = parseInt(localStorage.getItem('lockoutEnd') || '0', 10);
    const now = Date.now();

    if (lockoutEnd > now) {
      this.isLockedOut = true;
      this.remainingTime = Math.ceil((lockoutEnd - now) / 60000); // Remaining time in minutes
      this.startLockoutTimer();
    } else {
      this.isLockedOut = false;
      localStorage.removeItem('lockoutEnd');
      localStorage.removeItem('adminAttempts'); // Reset attempts after lockout
    }
  }

  startLockoutTimer() {
    const interval = setInterval(() => {
      const lockoutEnd = parseInt(localStorage.getItem('lockoutEnd') || '0', 10);
      const now = Date.now();
      if (lockoutEnd <= now) {
        this.isLockedOut = false;
        this.remainingTime = 0;
        localStorage.removeItem('lockoutEnd');
        clearInterval(interval);
      } else {
        this.remainingTime = Math.ceil((lockoutEnd - now) / 60000);
      }
    }, 60000); // Update every minute
  }

  closeDialog(success: boolean = false) {
    this.close.emit(success);
  }
}
