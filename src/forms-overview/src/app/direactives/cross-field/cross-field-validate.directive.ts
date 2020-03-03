import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, ValidatorFn, FormGroup, NG_VALIDATORS } from '@angular/forms';

/**
 * 跨字段验证
 * @param controlGroup 控件组
 */
const nameAgeCrossValidator: ValidatorFn = (controlGroup: FormGroup): ValidationErrors | null => {

  // 获取子控件的信息
  //
  const name = controlGroup.get('name');
  const age = controlGroup.get('age');

  return name && age && name.value === 'lala' && age.value === 12 ? { 'nameAgeInvalid': true } : null;
};

@Directive({
  selector: '[appCrossFieldValidate]',
  providers: [{ provide: NG_VALIDATORS, useExisting: CrossFieldValidateDirective, multi: true }]
})
export class CrossFieldValidateDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return nameAgeCrossValidator(control);
  }
}
