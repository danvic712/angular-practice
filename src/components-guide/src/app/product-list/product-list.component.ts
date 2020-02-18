import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  age: number;
}

/**
 * @Component() 装饰器，通过一个元数据对象来完成组件和视图间的关联，以及完成对于该组件的配置
 */
@Component({
  // 选择器，当在 html 页面上使用了该选择器所对应的标签值，则会在使用的位置上创建并插入这个组件的一个实例
  selector: 'app-product-list',
  // 组件所对应的 html 模板文件地址
  templateUrl: './product-list.component.html',
  // 组件视图所特有的 css 样式文件地址
  styleUrls: ['./product-list.component.scss']
})

/**
 * 组件类，为视图提供各种服务
 */
export class ProductListComponent implements OnInit {

  //  标题
  public title = '我是 title 属性值';

  public styleProperty = '<b>我是包含 html 标签的属性</b>';

  // 字体颜色
  public fontColor = 'red';

  // 链接地址
  public url = 'https://yuiter.com';

  // 姓名
  public name: string;

  public msg: string;

  public refMsg: string;

  public inlineStyle: {};

  public currentStyles: {};

  public flag = true;

  public products = [{
    'name': 'lalala',
    'price': '$200'
  }, {
    'name': 'hehehe',
    'price': '$400'
  }, {
    'name': 'wuwuwu',
    'price': '$120'
  }, {
    'name': 'xixi',
    'price': '$570'
  }];

  public config = '';

  public obj: Person;

  public personAge: number;

  public date = new Date();

  constructor() {
    //this.personAge = this.obj!.age;
  }

  ngOnInit(): void {
    this.setInlineStyle();
    this.setCurrentStyles();
  }

  getUser() {
    alert('111111111');
  }

  getMsg(event: KeyboardEvent) {
    console.log(event);
    this.msg = (event.target as HTMLInputElement).value;
  }

  getRefMsg(msg: string) {
    this.refMsg = msg;
  }

  setInlineStyle() {
    this.inlineStyle = {
      'text-red': true,
      'bg-blue': false,
    };
  }

  setCurrentStyles() {
    this.currentStyles = {
      'font-style': 'italic',
      'font-weight': 'bold',
      'font-size': '24px'
    };
  }

  removeElement() {
    this.flag = false;
  }

  trackByIndex(index: number, item: any): string {
    return item.price;
  }

  addProduct() {
    this.products = [{
      'name': 'lalala',
      'price': '$200'
    }, {
      'name': 'hehehe',
      'price': '$400'
    }, {
      'name': 'wuwuwu',
      'price': '$120'
    }, {
      'name': 'xixi',
      'price': '$570'
    }, {
      'name': 'lululu',
      'price': '$' + (Math.random() * 100).toFixed()
    }];
  }
}
