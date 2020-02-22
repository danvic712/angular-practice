// 引入 ViewChild
import { Component, OnInit, ViewChild } from '@angular/core';

// 引入服务
import { StorageService } from '../services/storage/storage.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {

  public title = 'parent title';

  public childMsg: string;

  public msg = 'this is a service default value writen in parent component';

  // 通过 @ViewChild 装饰器来接收字组件的 dom 信息
  @ViewChild('childComponent') child: any;

  constructor(private storage: StorageService) {
    this.storage.setMsg(this.msg);
  }

  ngOnInit(): void {
  }

  getMsg() {
    alert('我是父组件的 getMsg 方法');
  }

  getChildMsg() {
    alert(this.child.msg);
  }

  runChildFunc() {
    this.child.getMsg();
  }

  childEmitMsg(event) {
    this.childMsg = event;
  }

  submit() {
    this.storage.setMsg(this.msg);
  }
}
