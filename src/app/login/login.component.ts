import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  //standalone: true,
  //imports: [],
  templateUrl: './login.component.html'
  //,styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private apiService: ApiService, private router: Router) {}

  onLogin() {
    this.apiService.login(this.email, this.password).subscribe(response => {
      if (response.success) {
        // simpan token kalau ada
        localStorage.setItem('token', response.token);
        this.router.navigate(['/dashboard']);
      } else {
        alert('Login gagal');
      }
    });
  }
}
