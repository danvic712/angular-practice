## Knowledge Graph

![思维导图](./imgs/knowledge-graph.png)




## Step by Step

### 1、基础准备

重复上一篇笔记的内容，搭建一个包含路由信息的项目

新建三个组件，分别对应于两个实际使用到的页面与一个通配的 404 页面

```powershell
-- 危机中心页面
ng g component crisis-list

-- 英雄中心页面
ng g component hero-list

-- 404 页面
ng g component page-not-found 
```

在 app-routing.module.ts 文件中完成路由的定义，这里包含了对于路由的重定向以及通配路由的使用

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 引入组件
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisListComponent,
  },
  {
    path: 'heroes',
    component: HeroListComponent,
  },
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

之后，在根组件中，添加 router-outlet 标签用来声明路由在页面上渲染的出口

```html
<h1>Angular Router</h1>
<nav>
  <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a> &nbsp;&nbsp;
  <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
</nav>
<router-outlet></router-outlet>
```

![项目初始化](./imgs/20200524165043.gif)



### 2、路由守卫

### 3、惰性路由加载

