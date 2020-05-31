import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { LoginComponent } from './auth/login/login.component';

// 添加自定义的模块
import { CrisisModule } from './crisis/crisis.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    PageNotFoundComponent,
    HeroDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CrisisModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
