import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { ForschungsFrageService } from '@app/core';
import { map } from 'rxjs/operators';
import { ForschungsfragenModel } from 'src/app/core/models/forschungsfrage.model';



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
  showModal = false;


  constructor(
    private auth: AuthService,
    private forschungsfrageService: ForschungsFrageService,
  ) {}

  ngOnInit() {
    this.fetchAllForschungsfragen();
  }
  fetchAllForschungsfragen() {
    this.forschungsfrageService.getAllForschungsfragen()
      .subscribe({
        next: (response) => {
          this.forschungsfragen = response;
        },
        error: (error) => {
          console.error('Error fetching Forschungsfragen:', error);
        }
      });
    }

    handleSubmit() {
      if (!this.forschungsfrage.trim()) {
        return;
      }
    
      this.forschungsfrageService.createForschungsfrage(this.forschungsfrage)
        .subscribe({
          next: (response) => {
            console.log('Forschungsfrage saved:', response);
            this.forschungsfragen.push(response);
            this.forschungsfrage = '';
          },
          error: (error) => {
            console.error('Error saving Forschungsfrage:', error);
          }
        });
    }
    handleFreeze(){
        
    }
    handleConfirmSubmit() {
      this.showModal = true;
    }
  }
