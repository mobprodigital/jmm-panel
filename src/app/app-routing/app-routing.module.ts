import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AppComponent } from '../app.component';


let appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
