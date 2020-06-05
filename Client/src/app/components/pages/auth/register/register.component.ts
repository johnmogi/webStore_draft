import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { store } from 'src/app/redux/store';
import { AuthModel } from 'src/app/models/Auth-model';
import { ActionType } from 'src/app/redux/action-types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {
  public user = new AuthModel();



  constructor(private loginService: AuthService, private myRouter: Router) {}

  ngOnInit(): void {
    // if user already connected ,block this page for him.
    setTimeout(() => {
      if (store.getState().user !== null && store.getState().user.userID !== undefined) { this.myRouter.navigateByUrl("/"); return; }
    }, 100);
  }
  public register(): void {
    alert(JSON.stringify(this));
    this.loginService.login(this).subscribe(
      (res) => {
        if (!res.user) {
          alert('Wrong or missing user-Name or password.');
          return;
        }
        const action = { type: ActionType.userLogin, payload: res.user };
        store.dispatch(action);
        localStorage.setItem('token', res.jwtToken);
        if (res.user.isAdmin === true) {
          this.myRouter.navigateByUrl('/dashboard');
        }
      },
      (err) => alert(err.message)
    );
  }
}
