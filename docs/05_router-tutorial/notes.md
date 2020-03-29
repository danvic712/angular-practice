## Knowledge Graph

![思维导图](./imgs/knowledge-graph.png)






## Step by Step

### 1、基础概念

在定义路由信息之前，需要指定当前应用的根目录信息，在浏览期间，Angular 路由器会使用 base href 作为组件、模板和模块文件的基础路径地址

默认的情况下 app 文件夹是整个应用的根目录，则只需要在 index.html 中使用默认的 `<base href='\'>` 即可

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>RouterTutorial</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

在 Angular 中，需要将一个 url 地址映射到一个组件，因此需要手动的去设置对应的映射关系。在定义路由时，需要在文件中引入 Routes 和 RouterModule 从而进行路由的配置，最终在根模块中引入我们导出的路由配置完成对于应用的路由配置

```typescript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';

// 配置路由信息
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'product', component: ProductComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // 引入路由配置信息
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

![路由配置](./imgs/20200329161124.png)

在定义路由信息时，定义了一个空路径用来表示系统的默认地址，用来重定向到 `/home` 路径上，因为默认的匹配模式是当跳转的 url 地址和我们重定向前的前缀相同时进行重定向跳转，这里因为我们的指定的路径是空，所有这里需要指定匹配模式是全部匹配时才会跳转

![默认地址重定向](./imgs/20200329195024.png)

在解析路由时，会按照我们定义的顺序依次解析，一旦匹配就会立即终止，因此类似于 404 错误的这种通配的路由信息因为可以匹配上每个 url 地址，因此应该将它放到最后

当定义好路由信息后，需要在页面上使用占位符用来渲染路由对应的组件信息，这里需要使用 `<router-outlet>` 标签来定义路由的出口

当有地方可以渲染出匹配的路由信息后，就可以在 `a` 标签上通过使用 `RouterLink` 指令来进行路由的匹配

```html
<div class="card-container">
    <a class="card" [routerLink]="[ '/news' ]">
      <span>News</span>
    </a>
    <a class="card" [routerLink]="[ '/product' ]">
      <span>Product</span>
    </a>

  </div>

  <div class="card-container">
    <div class="form-card">
      <!-- 组件渲染的出口 -->
      <router-outlet></router-outlet>
    </div>
  </div>
</div>
```