import { Routes } from '@angular/router';
import { Main } from './pages/main/main';
import { Medien } from './pages/medien/medien';
import { Digital } from './pages/digital/digital';
import { Musik } from './pages/musik/musik';
import { Datenschutz } from './pages/datenschutz/datenschutz';
import { Impressum } from './pages/impressum/impressum';

export const routes: Routes = [
  { path: '', component: Main },
  { path: 'medien', component: Medien },
  { path: 'digital', component: Digital },
  { path: 'musik', component: Musik },
  { path: 'datenschutz', component: Datenschutz },
  { path: 'impressum', component: Impressum },
  { path: '**', redirectTo: '' },
];
