import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/models/Auth-model';
import { store } from 'src/app/redux/store';
import { ActionType } from 'src/app/redux/action-types';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
// register?

@Component({
  selector: 'app-sidebar1',
  templateUrl: './sidebar1.component.html',
  styles: [],
})
export class Sidebar1Component implements OnInit {
  public user: AuthModel;
  public loginForm = { userName: '', password: '' };

  constructor(private loginService: AuthService, private myRouter: Router) { }

  ngOnInit(): void {
    store.subscribe(() => {
      this.user = store.getState().user;
    });
  }

  public login(): void {
    alert(JSON.stringify(this.loginForm));
    this.loginService.login(this.loginForm).subscribe(
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
  public logout(): void {
    const action = { type: ActionType.userLogout, payload: null };
    store.dispatch(action);
    store.dispatch({ type: ActionType.userLogout, payload: false });
    localStorage.removeItem('token');
    this.myRouter.navigateByUrl('/');
  }
}
