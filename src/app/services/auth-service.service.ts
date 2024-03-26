import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Interfaces/user';
import { Router } from '@angular/router'
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private _isAuthenticated = false;
  private userEmailSubject = new BehaviorSubject<string>('');
  public userEmail$ = this.userEmailSubject.asObservable();


  constructor() {}

  setUserEmail(email: string) {
    this.userEmailSubject.next(email);
  }



  clearUserEmail() {
    this.userEmailSubject.next('');
  }
  isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  private _userAddedItem = new BehaviorSubject<boolean>(false);

  setUserAddedItem(value: boolean) {
    this._userAddedItem.next(value);
  }

  getUserAddedItem(): Observable<boolean> {
    return this._userAddedItem.asObservable().pipe(
      tap(value => console.log('Valor emitido por getUserAddedItem:', value))
    );
  }

}
