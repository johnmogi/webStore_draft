import { Component, OnInit } from '@angular/core';
import { AuthModel } from 'src/app/models/Auth-model';
import { store } from 'src/app/redux/store';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  public user: AuthModel;

  constructor(private loginService: AuthService, private myRouter: Router) {}
  showFiller = false;


  ngOnInit(): void {
    store.subscribe(() => {
      this.user = store.getState().user;
    });
  }




}
