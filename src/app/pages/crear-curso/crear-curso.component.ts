import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-curso',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-curso.component.html',
  styleUrls: ['./crear-curso.component.css']
})
export class CrearCursoComponent {
  cursoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {
    this.cursoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      duracion: [1, [Validators.required, Validators.min(1)]],
      fechaInicio: ['', Validators.required],
      modalidad: ['', Validators.required],
      docente: ['', Validators.required]
    });
  }

  crearCurso() {
    if (this.cursoForm.valid) {
      this.dataService.agregarCurso(this.cursoForm.value);
      this.router.navigate(['/cursos']);
    } else {
      this.cursoForm.markAllAsTouched();
    }
  }
}
