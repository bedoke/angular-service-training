import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  users: string[];

  constructor(private userService: UserService, private counterService: CounterService) {  }

  ngOnInit() {
    this.users = this.userService.activeUsers;
  }

  onSetToInactive(id: number) {
    this.userService.onSetToInactive(id);
    this.counterService.increaseChangesToInactive();
  }

}
