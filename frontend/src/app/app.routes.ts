import { Routes } from '@angular/router';

export const routePaths: {
    LOGIN: string,
    REGISTER: string
} = {
    LOGIN: 'login',
    REGISTER: 'register'
}

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: routePaths.LOGIN, loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent)},
    { path: routePaths.REGISTER, loadComponent: () => import('./register/register.component').then((c) => c.RegisterComponent)},
    { path: '**', redirectTo: 'login'}
];
