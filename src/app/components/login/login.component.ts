import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  faFacebook = faFacebook
  faGoogle = faGoogle
}
