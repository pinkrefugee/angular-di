import { Injectable } from '@angular/core';

export class UserService2 {
  getRandomInt() {
    return 100;
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  num;

  constructor() {
    this.num = Math.floor(Math.random() * Math.floor(100));
  }

  getRandomInt() {
    return this.num;
  }
}
