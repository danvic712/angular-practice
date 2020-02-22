import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private msg: string;

  constructor() { }

  setMsg(msg: string) {
    this.msg = msg;
  }

  getMsg(): string {
    return this.msg;
  }
}
