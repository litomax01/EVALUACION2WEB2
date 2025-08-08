import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  usuario: string = '';
  password: string = '';
  mensaje: string = '';

  constructor(private dataService: DataService, private router: Router) {}

  registrar() {
    if (this.dataService.registrarUsuario(this.usuario, this.password)) {
      this.mensaje = 'Usuario registrado exitosamente';
      setTimeout(() => this.router.navigate(['/login']), 1200);
    } else {
      this.mensaje = 'El usuario ya existe';
    }
  }
}
