import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './shared/errorpage/errorpage.component';

const routes: Routes = [
  {
    path: '404',
    component: ErrorpageComponent
  },
  {
    path: '**',
    // component: ErrorpageComponent
    redirectTo: '404'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
