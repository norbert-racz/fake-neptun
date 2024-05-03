import { Routes } from '@angular/router';

export const routePaths: {
    LOGIN: string,
    REGISTER: string,
    REGISTRATION_STATUS: string,
    HOME: string,
    UNREGISTER: string
} = {
    LOGIN: 'login',
    REGISTER: 'register',
    REGISTRATION_STATUS: 'registration-status',
    HOME: 'home',
    UNREGISTER: 'unregister'
}

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: routePaths.LOGIN, loadComponent: () => import('./login/login.component').then((c) => c.LoginComponent)},
    { path: routePaths.REGISTER, loadComponent: () => import('./register/register.component').then((c) => c.RegisterComponent)},
    { path: routePaths.REGISTRATION_STATUS, loadComponent: () => import('./registration-status/registration-status.component').then((c) => c.RegistrationStatusComponent)},
    { path: routePaths.HOME, loadComponent: () => import('./home/home.component').then((c) => c.HomeComponent)},
    { path: routePaths.UNREGISTER, loadComponent: () => import('./unregister/unregister.component').then((c) => c.UnregisterComponent)},
    { path: '**', redirectTo: 'login'}
];
