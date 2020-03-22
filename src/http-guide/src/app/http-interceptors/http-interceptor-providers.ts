import { HTTP_INTERCEPTORS } from '@angular/common/http';

// 需要添加的拦截器
import { LoggingInterceptor } from './logging-interceptor';

// 返回的拦截器数组
export const HttpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
];
