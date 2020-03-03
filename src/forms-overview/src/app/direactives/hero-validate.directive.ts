import { Directive, Input } from '@angular/core';
import { AbstractControl, Validator, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appHeroValidate]',
  // 将指令注册到 NG_VALIDATORS 使用 multi: true 将该验证器添加到现存的验证器集合中
  providers: [{ provide: NG_VALIDATORS, useExisting: HeroValidateDirective, multi: true }]
})
export class HeroValidateDirective implements Validator {

  /**
   * 获取指令输入属性数据
   */
  @Input('appHeroValidate') name: string;

  constructor() { }

  /**
   * 对指定的控件执行同步验证方法
   * @param control 控件
   */
  validate(control: AbstractControl): ValidationErrors | null {
    return control.value === 'lala' ? { 'nameInvalid': true } : null;
  }
}
