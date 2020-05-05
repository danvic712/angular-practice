import { Component, OnInit } from '@angular/core';

// 引入路由模块
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {}

  /**
   * 使用 js 的方式通过 query 查询字符串的形式传递参数
   */
  queryNavigate() {

    // 查询参数
    let query: NavigationExtras = {
      queryParams: {
        category: 'social',
        date: '2020-05-04'
      }
    };
    this.router.navigate(['/news' ], query);
  }
}
