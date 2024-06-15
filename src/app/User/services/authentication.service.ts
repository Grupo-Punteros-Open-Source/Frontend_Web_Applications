import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authStatus = new BehaviorSubject<string | null>(localStorage.getItem('type'));

  authStatus$ = this.authStatus.asObservable();

  updateAuthStatus(userType: string | null) {
    this.authStatus.next(userType);
  }
}
