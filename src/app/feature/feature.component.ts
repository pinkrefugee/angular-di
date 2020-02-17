import { FeatureService } from './../feature.service';
import { UserService, UserService2 } from './../user.service';
import { Component, OnInit } from '@angular/core';
export function f() {
  return 5;
}
const randomizer = {
  getRandomInt: f
};

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css'],
  providers: [{provide: UserService, useValue: randomizer}],
  //providers: [{provide: UserService, useClass: UserService2}],
  // providers: [{provide: UserService, useFactory: () => {
  //   return true ? new UserService() : new UserService2()
  // }}]
})
export class FeatureComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.userService.getRandomInt());
  }

}
