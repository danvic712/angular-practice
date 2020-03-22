import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { tap, finalize } from 'rxjs/operators';

/**
 * 通过添加 Injectable 特性，表明可以通过依赖注入的方式进行创建
 */
@Injectable()
export class LoggingInterceptor implements HttpInterceptor {
  /**
   * 请求拦截
   * @param req http 请求
   * @param next 下一个拦截器
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // 开始时间
    const started = Date.now();

    let msg: string;

    // 打印原始的请求信息
    console.log(`原始的请求信息：${JSON.stringify(req.headers)}`);

    // 获取请求中的 token 信息
    const token = req.headers.get('Authorization') || '';

    // 克隆请求信息
    const authReq = req.clone({
      headers: token === '' ? req.headers.set('Authorization', '123456') : req.headers
    });

    // 打印修改后的请求信息
    console.log(`克隆后的请求信息：${JSON.stringify(authReq.headers)}`);

    // 将克隆后的 http 请求信息传递给下一个拦截器
    return next.handle(authReq)
      .pipe(
        tap(
          // 捕获当前请求是否成功 or 失败

          // 1、通过判断响应的类型是否为 HttpResponse 来判断请求是否成功
          event => msg = event instanceof HttpResponse ? '请求成功' : '请求失败',

          // 2、如果存在了 error 回调，则请求失败
          error => msg = '请求失败'
        ), finalize(() => {
          const elapsed = Date.now() - started;
          console.log(`请求方式：${req.method} 请求地址：${req.urlWithParams} 响应耗时：${elapsed} ms 请求结果：${msg}`);
        }));
  }
}

