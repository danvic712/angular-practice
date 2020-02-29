import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';


const routes: Routes = [
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'dynamic-forms', component: DynamicFormsComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
