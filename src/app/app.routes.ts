import { Routes } from '@angular/router';

import { LoginComponent } from './pages/auth/login/login.component';

import { HomeComponent } from './pages/dashboard/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
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
