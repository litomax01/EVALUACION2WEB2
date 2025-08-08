import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CrearCursoComponent } from './pages/crear-curso/crear-curso.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'cursos', component: CursosComponent, canActivate: [AuthGuard] },
  { path: 'crear-curso', component: CrearCursoComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
