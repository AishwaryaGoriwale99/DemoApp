import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'register', component: RegisterComponent},
];
