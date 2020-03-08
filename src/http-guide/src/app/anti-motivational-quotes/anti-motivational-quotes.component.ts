import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

// 引入服务
import { AntiMotivationalQuotesServicesService } from './../services/anti-motivational-quotes-services.service';

// 引入接口响应对象
import { GetQuotesResponseModel } from '../interfaces/get-quotes-response-model';
import { SetQuotesResponseModel } from '../interfaces/set-quotes-response-model';

@Component({
  selector: 'app-anti-motivational-quotes',
  templateUrl: './anti-motivational-quotes.component.html',
  styleUrls: ['./anti-motivational-quotes.component.scss']
})
export class AntiMotivationalQuotesComponent implements OnInit {

  // 通过构造函数注入的方式使用服务
  constructor(private services: AntiMotivationalQuotesServicesService) { }

  public quoteResponse: GetQuotesResponseModel;

  public quoteResponseInfo: HttpResponse<GetQuotesResponseModel>;

  public textResponse: string;

  public quote: string;

  public submitQuoteResponse: SetQuotesResponseModel;

  ngOnInit(): void {
  }

  /**
   * 获取毒鸡汤
   */
  getQuotes() {
    this.services.getAntiMotivationalQuotes().subscribe((response: GetQuotesResponseModel) => {
      this.quoteResponse = response;
    }, error => {
      console.error(error);
    });
  }

  /**
   * 获取毒鸡汤接口完整的请求信息
   */
  getQuotesResponse() {
    this.services.getAntiMotivationalQuotesResponse().subscribe((response: HttpResponse<GetQuotesResponseModel>) => {
      this.quoteResponseInfo = response;
    });
  }

  /**
   * 获取响应对象不为 json 对象的信息
   */
  getYuiterSitemap() {
    this.services.getYuiterSitemap().subscribe((response) => {
      this.textResponse = response;
    });
  }

  /**
   * 提交毒鸡汤信息
   */
  submit() {
    this.services.submitAntiMotivationalQuote(this.quote).subscribe((response: SetQuotesResponseModel) => {
      this.submitQuoteResponse = response;
    });
  }
}
