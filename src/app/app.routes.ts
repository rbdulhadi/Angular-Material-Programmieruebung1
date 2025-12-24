import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { About } from './about/about';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'dashboard', component: Dashboard },
  { path: 'about', component: About },
];
