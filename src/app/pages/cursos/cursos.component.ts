import { Component } from '@angular/core';
import { DataService, Curso } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { HorasPipe } from '../../pipes/horas.pipe';
@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, HorasPipe],
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent {
  cursos: Curso[] = [];

  constructor(private dataService: DataService) {
    this.cursos = this.dataService.getCursos();
  }
}
