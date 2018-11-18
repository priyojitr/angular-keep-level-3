import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup(
    {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)])
    }
  );
  public bearerToken: string;
  public submitMessage: string;

  constructor(private _authService: AuthenticationService,
    private _routerService: RouterService) {
    }
    // getter-setter form field values
    get username() {
      return this.loginForm.get('username');
    }
    get password() {
      return this.loginForm.get('password');
    }
    set username(fmUsername: any) {
      this.loginForm.setValue({
        username: fmUsername.value
      });
    }
    set password(fmPassword: any) {
      this.loginForm.setValue({
        password: fmPassword.value
      });
    }
    // get error messasges
    getUsernameBlankMessage() {
      return this.username.hasError('required') ? 'username field cannot be blank' : '';
    }
    getPasswordBlankMessage() {
      return this.password.hasError('required') ? 'password field cannot be blank' : '';
    }
    getPasswordMinLenMessage() {
      return this.password.hasError('minlength') ? 'password field minimum length should be 4' : '';
    }

    loginSubmit() {
      console.log('user');
      if (this.username.length === 0 || this.password.length === 0) {
        this.submitMessage = 'must supply value for username & password field';
        return false;
      } else {
        this._authService.authenticateUser(this.loginForm.value).subscribe(
          res => {
            this.bearerToken = res['token'];
            this._authService.setBearerToken(this.bearerToken);
            this._routerService.routeToDashboard();
          },
          err => this.submitMessage = err.message
        );
      }
    }
}
