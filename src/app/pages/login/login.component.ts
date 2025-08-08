import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';
  error: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  login() {
    if (this.dataService.login(this.usuario, this.password)) {
      this.router.navigate(['/cursos']);
    } else {
      this.error = 'Usuario o contraseña incorrectos';
    }
  }
}
