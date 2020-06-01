import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';

// 引入路由守卫
import { AuthGuard } from '../auth/auth.guard';


const routes: Routes = [{
  path: '',
  component: CrisisListComponent,
  canActivate: [AuthGuard], // 添加针对当前路由的 canActivate 路由守卫
  children: [{
    path: '',
    canActivateChild: [AuthGuard], // 添加针对子路由的 canActivate 路由守卫
    children: [{
      path: 'detail',
      component: CrisisDetailComponent
    }]
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
