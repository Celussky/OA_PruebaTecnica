import { Component } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    LoginComponent,
    FontAwesomeModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  faHouse = faHouse
  faLigthbulb = faLightbulb
  faBook = faBook
  faUser = faUser
}
