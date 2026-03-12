import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Medien } from './pages/medien/medien';
import { Digital } from './pages/digital/digital';
import { Musik } from './pages/musik/musik';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'medien', component: Medien },
  { path: 'digital', component: Digital },
  { path: 'musik', component: Musik },
  { path: 'datenschutz', component: Musik },
  { path: 'impressum', component: Musik },
  { path: '**', redirectTo: '' },
];
