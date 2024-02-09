import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FreezePolylogService } from 'src/app/core/services/freeze-polylog.service';


@Component({
  selector: 'app-confirm-freeze-dialog',
  template: `
  <div class="modal-container" *ngIf="isOpen">
  <div class="modal-backdrop">
  <div class="modal">
  <h2>{{ VKb2xiYiQ2 ? 'Taue den Polylog auf.' : 'Friere den Polylog ein.' }}</h2>
  <h6>{{ VKb2xiYiQ2 ? 'Wenn du den Polylog auftaust, können wieder neue Beiträge oder Antworten erstellt werden.' : 'Wenn du den Polylog einfrierst können keine neuen Beiträge oder Antworten erstellt werden.'}}
  Die aktuelle Diskussion mit allen Kommentaren wird dann {{ VKb2xiYiQ2 ? 'wieder aktiviert' : 'eingefroren'}},.
    <br/>
    <br/>
    <span>{{ VKb2xiYiQ2 ? 'Polylog auftauen?' : 'Polylog einfrieren?' }}</span>
    </h6>
    <button class="submit-button" (click)="handleSubmit()">{{ VKb2xiYiQ2 ? 'Auftauen' : 'Einfrieren' }}</button>
    <button class="close-button" (click)="closeDialog()">Zurück</button>
  </div>
</div>

  </div>
  `,
})
export class ConfirmationFreezeDialogComponent implements OnInit {

  constructor(
    private freezePolylogService: FreezePolylogService,
  ) {}

  @Input() isOpen = false;
  VKb2xiYiQ2: boolean = false;
  @Output() close = new EventEmitter<boolean>();
  @Output() stateChanged = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.freezePolylogService.getFreezeState().subscribe((state) => {
      this.VKb2xiYiQ2 = state;
    });
  }


  handleSubmit() {
      this.freezePolylogService.setFreezeState(!this.VKb2xiYiQ2);
      this.closeDialog();
    }

  closeDialog(success: boolean = false) {
    this.close.emit(success);
  }
}
