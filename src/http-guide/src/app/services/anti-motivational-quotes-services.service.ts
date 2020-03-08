import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// 引入 HttpClient 类
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';

// 引入接口响应类
import { GetQuotesResponseModel } from '../interfaces/get-quotes-response-model';
import { SetQuotesResponseModel } from '../interfaces/set-quotes-response-model';

@Injectable({
  providedIn: 'root'
})
export class AntiMotivationalQuotesServicesService {

  // 通过构造函数注入的方式依赖注入到使用的类中
  constructor(private http: HttpClient) { }

  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'token'
    })
  };

  /**
   * 通过 get 请求获取毒鸡汤信息
   */
  getAntiMotivationalQuotes(): Observable<GetQuotesResponseModel> {
    const url = 'https://api.tryto.cn/djt/text';
    return this.http.get<GetQuotesResponseModel>(url);
  }

  /**
   * 获取完整的接口请求信息
   */
  getAntiMotivationalQuotesResponse(): Observable<HttpResponse<GetQuotesResponseModel>> {
    const url = 'https://api.tryto.cn/djt/text';
    return this.http.get<GetQuotesResponseModel>(url, { observe: 'response' });
  }

  /**
   * 获取响应类型非 json 对象的信息
   */
  getYuiterSitemap(): Observable<string> {
    const url = 'https://yuiter.com/sitemap.xml';
    return this.http.get(url, { responseType: 'text' });
  }

  /**
   * 提交毒鸡汤信息
   * @param content 毒鸡汤
   */
  submitAntiMotivationalQuote(content: string): Observable<SetQuotesResponseModel> {
    const url = 'https://api.tryto.cn/djt/submit';
    return this.http.post<SetQuotesResponseModel>(url, {
      content
    });
  }

  /**
   * 修改请求头信息
   */
  submitWithOptions() {
    const url = '';
    return this.http.post(url, {
      data: ''
    }, this.httpOptions);
  }
}
