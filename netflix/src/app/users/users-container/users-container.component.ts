import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../user.service';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'netflix-users-container',
  templateUrl: './users-container.component.html',
  styleUrls: ['./users-container.component.scss'],
  animations: [
    trigger(
      'onOpen',
      [
        transition(
          ':enter',
          [
            style({ transform:'scale(1.1)', opacity:0}),
            animate('0.25s ease-out',
              style({ transform:'scale(1)', opacity:1}))
          ]
        ),
      ]
    )
  ],
})
export class UsersContainerComponent implements OnInit {

  public users!: User[];
  public showAddUser = false;
  public showEditUser = false;
  public canEdit = false;
  public profileToEdit?: User;

  constructor(private userService: UserService) { }

  addUser(user: User){
    this.userService.addUser(user);
    this.showAddUser = false;
  }

  showEditProfile(user: User){
    this.profileToEdit = user;
    this.showEditUser = true
  }

  ngOnInit(): void {
    this.userService.users$.subscribe(users => this.users = users)
  }

}
