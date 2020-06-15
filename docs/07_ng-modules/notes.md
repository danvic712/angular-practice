## Knowledge Graph

![思维导图](./imgs/knowledge-graph.png)




## Step by Step

### 1、前端模块化

前端模块化是指将程序中一组相关的功能按照一定的规则组织在一块，整个模块内部的数据和功能实现是私有的，通过 export 暴露其中的一些接口（方法）与系统中的别的模块进行通信

#### 1.1、NgModule 简介

在 Angular 应用中，至少会存在一个 NgModule，也就是应用的根模块（AppModule）,通过引导这个根模块就可以启动整个项目。而像开发中使用到 FormsModule、HttpClientModule 这种 Angular 内置的库也都是一个个的 NgModule，通过将组件、指令、管道、服务或其它的代码文件聚合成一个内聚的功能块，专注于某个功能模块

#### 1.2、常见的 NgModule 模块

| 模块名称                                                     | 模块所在文件                                               | 功能点                               |
| ------------------------------------------------------------ | ---------------------------------------------------------- | ------------------------------------ |
| [BrowserModule](https://angular.cn/api/platform-browser/BrowserModule) | @angular/platform-browser                                  | 用于启动和运行浏览器应用的的基本服务 |
| [CommonModule](https://angular.cn/api/common/CommonModule)   | @angular/common                                            | 使用 NgIf、NgFor 之类的内置指令      |
| [FormsModule](https://angular.cn/api/forms/FormsModule)      | @angular/forms                                             | 使用 NgModel 构建模板驱动表单        |
| [ReactiveFormsModule](https://angular.cn/api/forms/ReactiveFormsModule) | @angular/forms                                             | 构建响应式表单                       |
| [RouterModule](https://angular.cn/api/router/RouterModule)   | @angular/router                                            | 使用前端路由                         |
| [HttpClientModule](https://angular.cn/api/common/http/HttpClientModule) | @angular/common/[http](https://angular.cn/api/common/http) | 发起 http 请求                       |

#### 1.3、JavaScript 模块与 NgModule 

在 JavaScript 中，每一个 js 文件就是一个模块，文件中定义的所有对象都从属于那个模块。 通过 `export` 关键字，模块可以把其中的某些对象声明为公共的，从而其它 JavaScript 模块可以使用 `import ` 语句来访问这些公共对象

例如下面的示例代码中，别的 javascript 模块可以通过导入到这个 js 文件来直接使用暴露的 `getRoles` 和 `getUserInfo` 方法

```javascript
function getRoles() {
    // ...
}

function getUserInfo() {
    // ...
}

export {
    getRoles,
    getUserInfo
}
```

NgModule 是一个带有 @NgModule 装饰器的类，通过函数的参数来描述这个模块，例如在上节笔记中创建的 CrisisModule，定义了我们在该特性模块中创建的组件，以及需要使用到的其它模块

![NgModule](./imgs/20200613222737.png)

在使用 @NgModule 装饰器时，通常会使用到下面的属性来定义一个模块

- declarations：当前模块中的组件、指令、管道

- imports：当前模块所需的其它 NgModule 模块

- exports：其它模块中可以使用到当前模块可声明的对象

- providers：当前模块像当前应用中其它应用模块暴露的服务

- bootstrap：用来定义整个应用的根组件，是应用中所有其它视图的宿主，只有根模块中才会存在

  

### 2、应用的根模块

根模块是用来启动此 Angular 应用的模块， 按照惯例，它通常命名为 `AppModule`。通过 Angular CLI 新建一个应用后，默认的根模块代码如下，同过使用 @NgModule 装饰器装饰 AppModule 类，定义了这个模块的一些属性特征，从而告诉 Angular 如何编译和启动本应用

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

#### 2.1、declarations

`declarations` 数组告诉 Angular 哪些组件属于当前模块。 当创建新的组件时，需要将它们添加到 `declarations` 数组中。每个组件都只能声明在一个 `NgModule` 类中，同时如果你使用了未声明过的组件，Angular 就会报错

同样的，对于当前模块使用到的自定义指令、自定义管道，也需要在 `declarations` 数组中进行定义

#### 2.2、imports

`imports` 数组表明当前模块正常工作时需要引入哪些的模块，例如这里使用到的 `BrowserModule`、`AppRoutingModule` 或者是我们使用双向数据绑定时使用到的 `FormsModule`

#### 2.3、providers

`providers` 数组定义了当前模块提供给当前应用的各项服务，例如一个用户模块，提供了获取当前登录用户信息的服务，因为应用中的其它地方也会存在调用的可能，因此，可以通过添加到 `providers` 数组中，提供给别的模块使用

#### 2.4、bootstrap

Angular 应用通过引导根模块来启动的，因为会涉及到构建组件树，形成实际的 DOM，因此需要在 `bootstrap` 数组中添加根组件用来作为组件树的根



### 3、特性模块

特性模块是用来将特定的功能或具有相关特性的代码从其它代码中分离出来，聚焦于特定应用需求的一组功能，特性模块通过它提供的服务以及共享出的组件、指令和管道来与根模块和其它模块合作

在上一章中，定义了一个 CrisisModule 用来包括包含与危机有关的功能模块，创建特性模块时可以通过 Angular CLI 命令行进行创建

```powershell
-- 创建名为 xxx 的特性模块
ng new component xxx
```

```typescript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrisisRoutingModule } from './crisis-routing.module';

import { FormsModule } from '@angular/forms';

import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { CrisisDetailComponent } from './crisis-detail/crisis-detail.component';


@NgModule({
  declarations: [
    CrisisListComponent,
    CrisisDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CrisisRoutingModule
  ]
})
export class CrisisModule { }
```

当创建完成后，为了将该特性模块包含到应用中，需要和使用 Angular 内置的 `BrowserModule`、`AppRoutingModule` 一样，在根模块中引入

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// 添加自定义的模块
import { CrisisModule } from './crisis/crisis.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CrisisModule, // 引入自定义模块
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

