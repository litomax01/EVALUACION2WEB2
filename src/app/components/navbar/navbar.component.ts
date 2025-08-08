import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private dataService: DataService, private router: Router) {}

  logout() {
    this.dataService.logout();
    this.router.navigate(['/login']);
  }
}
