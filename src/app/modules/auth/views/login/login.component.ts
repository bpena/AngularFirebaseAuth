import {Component, Input, NgZone, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Input() urlCallback = 'dashboard';
  user = null;

  constructor(private authService: AuthService,
              private ngZone: NgZone,
              private router: Router) { }


  ngOnInit() {
  }


  signInWithTwitter() {
    this.authService.signInWithTwitter()
      .then((res) => {
        this.goToDashboard();
      })
      .catch((err) => console.log(err));
  }


  signInWithFacebook() {
    this.authService.signInWithFacebook()
      .then((res) => {
        this.goToDashboard();
      })
      .catch((err) => console.log(err));
  }


  signInWithGoogle() {
    this.authService.signInWithGoogle()
      .then((res) => {
        this.goToDashboard();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  signInWithGithub() {
    this.authService.signInWithGithub()
      .then((res) => {
        this.goToDashboard();
      })
      .catch((err) => console.log(err));
  }


  goToDashboard() {
    this.ngZone.run(() => this.router.navigateByUrl(this.urlCallback));
  }
}
