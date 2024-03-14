import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '', component: AppComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'calendario', component: CalendarioComponent }
        ]
    }
];
