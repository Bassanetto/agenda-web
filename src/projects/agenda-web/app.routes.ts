import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'calendario', component: CalendarioComponent }
];
