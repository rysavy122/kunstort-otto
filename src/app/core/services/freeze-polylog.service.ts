// freeze-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FreezePolylogService {
  private readonly freezeKey = 'VKb2xiYiQ2';
  private freezeState = new BehaviorSubject<boolean>(this.getInitialState());

  constructor() {}

  private getInitialState(): boolean {
    const storedState = localStorage.getItem(this.freezeKey);
    return storedState ? JSON.parse(storedState) : false;
  }

  setFreezeState(isFrozen: boolean): void {
    this.freezeState.next(isFrozen);
    localStorage.setItem(this.freezeKey, JSON.stringify(isFrozen));
  }

  getFreezeState() {
    return this.freezeState.asObservable();
  }
}
