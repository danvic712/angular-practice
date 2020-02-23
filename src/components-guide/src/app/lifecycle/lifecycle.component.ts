import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  public flag = true;

  public msg = '我是父组件的 msg';

  constructor() { }

  ngOnInit(): void {
  }


  toggle() {
    this.flag = !this.flag;
  }
}
