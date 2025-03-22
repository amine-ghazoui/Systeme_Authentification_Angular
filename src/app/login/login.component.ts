import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  username : string = '';
  password : string = '';

  constructor(private authService : AuthService, private router : Router){ }

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe(users => {
      if (users.length > 0) {
        localStorage.setItem('token', 'fake-jwt-token');
        this.router.navigate(['/home']);
      } 
      else {
        alert('Invalid credentials');
      }
    });
  }

  
}
