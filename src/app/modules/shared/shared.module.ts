import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DialogComponent } from './components/dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NotFoundComponent, DialogComponent],
  exports: [NotFoundComponent, DialogComponent]
})
export class SharedModule { }
