import { Component, OnInit } from '@angular/core';

import { Hero } from './../classes/hero';

@Component({
  selector: 'app-template-driven-forms',
  templateUrl: './template-driven-forms.component.html',
  styleUrls: ['./template-driven-forms.component.scss']
})
export class TemplateDrivenFormsComponent implements OnInit {
  constructor() { }

  // 性别选项
  public genders = [{
    id: 'male', text: '男', value: true
  }, {
    id: 'female', text: '女', value: false
  }];

  /**
   * 住址下拉
   */
  public locations: Array<string> = ['beijing', 'shanghai', 'hangzhou', 'wuhan'];

  hero = new Hero('', 18, 'true', 'beijing');

  ngOnInit(): void {
  }

  submit() {
    alert(1111);
  }
}
