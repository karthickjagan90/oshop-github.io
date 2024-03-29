import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from './../models/app-user';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;    
  constructor(private afAuth:AngularFireAuth,
     private route: ActivatedRoute,
     private router:Router,
     private userService:UserService) {
    this.user$ = afAuth.authState;    
  }

  login() {
    return this.afAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  logout() {
    this.afAuth.auth.signOut().then(() =>{
        this.router.navigate(['']);
    });;    
  }

  get appUser$() : Observable<AppUser> | null {
    return this.user$.switchMap(user => {
      if(user)
        return this.userService.get(user.uid).valueChanges();
      return Observable.of(null);
      });
  }
}