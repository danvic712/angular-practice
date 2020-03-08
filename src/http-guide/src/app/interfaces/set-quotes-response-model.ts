export interface SetQuotesResponseModel {
  /**
   * 接口响应码
   */
  code: number;
  /**
   * 响应信息
   */
  msg: string;
  /**
   * 响应数据
   */
  data: ResponseData;
  /**
   * 响应时间
   */
  time: number;
}

/**
 * 接口响应的内容信息
 */
interface ResponseData {
  /**
   * 毒鸡汤
   */
  content: string;
}
