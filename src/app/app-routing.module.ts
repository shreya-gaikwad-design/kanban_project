import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SetPasswordComponent } from './set-password/set-password.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },  // Home page
  { path: 'set-password', component: SetPasswordComponent },  // Set password page
  { path: '**', redirectTo: '' }  // Wildcard route for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
