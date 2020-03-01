import { Component, OnInit } from '@angular/core';

// 引入 FormControl 和 FormGroup 对象
import { FormControl, FormGroup } from '@angular/forms';

// 引入 FormBuilder 构建表单控件
import { FormBuilder } from '@angular/forms';

// 引入 Validators 验证器
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  // 定义对象属性来承接 FormGroup 实例
  // public profileForm = new FormGroup({
  //   name: new FormControl('啦啦啦'),
  //   age: new FormControl(12),
  //   address: new FormGroup({
  //     province: new FormControl('北京市'),
  //     city: new FormControl('北京'),
  //     district: new FormControl('朝阳区'),
  //     street: new FormControl('三里屯街道')
  //   })
  // });

  /**
   * ctor
   * @param formBuilder 表单构造器
   */
  constructor(private formBuilder: FormBuilder) { }

  public profileForm = this.formBuilder.group({
    name: ['', [
      Validators.required,
      Validators.minLength(4)
    ]],
    age: [12],
    address: this.formBuilder.group({
      province: ['北京市'],
      city: ['北京'],
      district: ['朝阳区'],
      street: ['三里屯街道']
    })
  });

  // 添加需要验证控件 getter 方法，用来在模板中获取状态值
  get name() {
    return this.profileForm.get('name');
  }

  ngOnInit(): void {
  }

  submit() {
    alert(JSON.stringify(this.profileForm.value));
  }

  updateProfile() {
    // 需要更新全部的数据
    // this.profileForm.setValue({
    //   name: '423'
    // });
    this.profileForm.patchValue({
      name: '12345'
    });
  }
}
