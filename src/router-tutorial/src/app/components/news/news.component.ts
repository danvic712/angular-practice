import { Component, OnInit } from '@angular/core';

// 引入路由模块
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  newsList: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.newsList = [{
      newsId: 1111,
      title: 'lalalalalallaaa'
    }, {
      newsId: 2222,
      title: 'lalalalalallaaa'
    }, {
      newsId: 3333,
      title: 'lalalalalallaaa'
    }];

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((data: any) => {
      console.log(data.params);
    });
  }

  routerNavigate() {
    this.router.navigate(['/news/detail', 11111]);
  }
}
