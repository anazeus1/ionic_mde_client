import { Routes } from '@angular/router';

export const routes: Routes = [


  {
    path: 'loader',
    loadComponent: () => import('./pages/loader/loader.page').then( m => m.LoaderPage)
  },
  {
    path: 'addActivity',
    loadComponent: () => import('./pages/add-activity/add-activity.page').then( m => m.AddActivityPage)
  },
  {

    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'add-activity',
    loadComponent: () => import('./pages/add-activity/add-activity.page').then(m => m.AddActivityPage)
  },
];
