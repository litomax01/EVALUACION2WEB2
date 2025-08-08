import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Usuario {
  id: number;
  usuario: string;
  password: string;
}

export interface Curso {
  id: number;
  nombre: string;
  descripcion: string;
  duracion: number;
  fechaInicio: string;
  modalidad: string;
  docente: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  usuarios: Usuario[] = [];
  cursos: Curso[] = [];
  private usuarioAutenticado: Usuario | null = null;

  constructor(private http: HttpClient) {
    this.cargarDatos();
    const user = localStorage.getItem('usuarioAutenticado');
    if (user) {
      this.usuarioAutenticado = JSON.parse(user);
    }
  }

  cargarDatos() {
    this.http.get<{ usuarios: Usuario[], cursos: Curso[] }>('assets/data/data.json')
      .subscribe(data => {
        this.usuarios = data.usuarios;
        this.cursos = data.cursos;
      });
  }

  registrarUsuario(usuario: string, password: string): boolean {
    if (this.usuarios.find(u => u.usuario === usuario)) return false;
    const nuevo: Usuario = {
      id: this.usuarios.length > 0 ? Math.max(...this.usuarios.map(u => u.id)) + 1 : 1,
      usuario,
      password
    };
    this.usuarios.push(nuevo);
    return true;
  }

  login(usuario: string, password: string): boolean {
    const user = this.usuarios.find(u => u.usuario === usuario && u.password === password);
    if (user) {
      this.usuarioAutenticado = user;
      localStorage.setItem('usuarioAutenticado', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    this.usuarioAutenticado = null;
    localStorage.removeItem('usuarioAutenticado');
  }

  isAuthenticated(): boolean {
    return this.usuarioAutenticado !== null;
  }

  getCursos(): Curso[] {
    return this.cursos;
  }

  agregarCurso(curso: Curso) {
    curso.id = this.cursos.length > 0 ? Math.max(...this.cursos.map(c => c.id)) + 1 : 1;
    this.cursos.push(curso);
  }
}
