import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 程序中对应的路由信息集合
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
