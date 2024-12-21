import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const tituloPagina = "QuickBites"

export const routes: Routes = [
    { path: 'home', title: `Home | ${tituloPagina}`, component: HomeComponent },
    { path: '', title: `Login | ${tituloPagina}`, component: LoginComponent },
];
