import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { LoginDetails } from './login-details.model';
import { AuthService } from '../auth.service';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  error = false;

  constructor(private authService: AuthService, private loginService: LoginService, private formBuilder: FormBuilder, private router: Router) { }

  onSubmit(): void {
    this.error = false;
    const loginDetails = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
      } as LoginDetails;
    this.loginService.sendLoginDetails(loginDetails).subscribe(
      response => {
        this.authService.login();
        this.router.navigate(['/app-upload']);
        },
      error => {
        console.log('error');
        this.error = true;
        }
      );
  }

}
