import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SetPasswordComponent } from './set-password/set-password.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'set-password', component: SetPasswordComponent },
  //{ path: '**', redirectTo: '' }
];
