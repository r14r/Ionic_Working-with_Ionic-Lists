import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SamplesFormsPage } from './samples-forms.page';

const routes: Routes = [
  {
    path: '',
    component: SamplesFormsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SamplesFormsPage]
})
export class SamplesFormsPageModule {}
