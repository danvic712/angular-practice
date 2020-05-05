import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { NewsDetailComponent } from './components/news/news-detail/news-detail.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';

// 配置路由信息
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'news', component: NewsComponent },
  { path: 'news/detail/:newsId', component: NewsDetailComponent },
  { path: 'product', component: ProductComponent, children: [{
    path: 'detail', component: ProductDetailComponent
  },{
    path: '', redirectTo: 'detail', pathMatch: 'full'
  }]},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
