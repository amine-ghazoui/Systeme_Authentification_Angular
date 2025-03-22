import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  login: string = '';
  name : string = '';
  password : string = '';

  constructor(private authService : AuthService, private router : Router){}

  onSubmit() {
    this.authService.signup(this.login, this.name, this.password).subscribe(
      (response) => {
        console.log('User registered successfully:', response);
        this.router.navigate(['/login']); // Redirige vers la page login après l'inscription
      },
      (error) => {
        console.error('Error during registration:', error);
      }
    );
  }
}
