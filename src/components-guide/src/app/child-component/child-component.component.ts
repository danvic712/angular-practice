// 引入 Input、Output、EventEmitter
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// 引入服务
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {

  // 获取父组件的数据
  @Input() parentGetMsg: any;

  // 使用 setter 对父组件的数据进行深加工
  private _title: string;

  @Input()
  set parentTitle(title: string) {
    this._title = (title && title.trim()) || '父组件的 title 属性值为空';
  }
  get parentTitle(): string {
    return this._title;
  }

  public msg = 'child title';

  public storageMsg: string;

  // 定义一个事件触发器
  @Output() childEmitter = new EventEmitter<string>();

  constructor(private storage: StorageService) {
  }

  ngOnInit(): void {
  }

  runParentFunc() {
    this.parentGetMsg();
  }

  getMsg() {
    alert('我是子组件的 getMsg 方法');
  }

  sendMsg() {
    this.childEmitter.emit(this.msg);
  }

  getServiceMsg() {
    this.storageMsg = this.storage.getMsg();
  }
}
