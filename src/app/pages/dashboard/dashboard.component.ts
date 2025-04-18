import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//components
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
