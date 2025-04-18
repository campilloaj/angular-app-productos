import { Routes } from '@angular/router';

import { HomeComponent } from './pages/dashboard/home/home.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/auth/login/login.component').then(
            (c) => c.LoginComponent
          ),
      },
      {
        path: 'recovery',
        loadComponent: () =>
          import(
            './pages/auth/recover-password/recover-password.component'
          ).then((c) => c.RecoverPasswordComponent),
      },
    ],
  },
  {
    path: 'dash',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.component').then(
        (c) => c.DashboardComponent
      ),
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
