import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  //providers: [UserService]
})
export class ChildComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log(this.userService.getRandomInt());
  }

}
