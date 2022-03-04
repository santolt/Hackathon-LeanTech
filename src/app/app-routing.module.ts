import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: ()=> import('./auth/auth.module').then(m=> m.AuthModule)
  },
  {
    path:'form',
    loadChildren: ()=> import('./form/form.module').then(m=> m.FormModule)
  },
  {
    path:'sudoku',
    loadChildren: ()=> import('./form/form.module').then(m=> m.FormModule)
  },
  {
    path: 'welcome',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: 'welcome'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
