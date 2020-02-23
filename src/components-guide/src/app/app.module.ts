/**
 * Angular 根模块，引导应用启动
 */

/**
 * BrowserModule: 浏览器解析模块
 * NgModule: Angular 核心模块
 * AppRoutingModule: 路由模块
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

/**
 * AppComponent: 应用的根组件
 * ProductListComponent: product-list 组件
 */
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';

/**
 * 引入表单模块，从而使用双向数据绑定
 */
import { FormsModule } from '@angular/forms';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { ChildComponentComponent } from './child-component/child-component.component';

// 引入自定义的服务
import { StorageService } from './services/storage/storage.service';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';

/**
 * @NgModule() 装饰器，用来接收一个元数据对象，用来描述这个根模块
 */
@NgModule({
  // 声明当前应用需要使用的组件、指令、管道
  declarations: [
    AppComponent,
    ProductListComponent,
    ParentComponentComponent,
    ChildComponentComponent,
    LifecycleComponent,
    LifecycleChildComponent
  ],
  // 引入当前模块能够正常运行时所需要依赖的别的模块
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  // 模块所提供的全局服务，可以被应用中任何部门使用
  providers: [StorageService],
  // 应用的主视图 - 根组件，用来引导 AppModule 启动应用，是应用中其它视图的宿主
  bootstrap: [AppComponent]
})

export class AppModule { }
