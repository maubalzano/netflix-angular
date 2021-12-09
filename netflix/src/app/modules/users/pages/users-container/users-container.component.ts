import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from '../../user.service';
import { trigger, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';

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
export class UsersContainerComponent implements OnInit, OnDestroy {

  public users!: User[];
  public showAddUser = false;
  public showEditUser = false;
  public canEdit = false;
  public profileToEdit?: User;
  private usersSubscription!: Subscription;

  constructor(private userService: UserService) { }

  addUser(user: User){
    this.userService.addUser(user);
    this.showAddUser = false;
  }

  editUser(user: User){
    this.userService.editUser(user);
    this.showEditUser = false
  }

  showEditProfile(user: User){
    this.profileToEdit = user;
    console.log(user);
    this.showEditUser = true
  }

  navigateToBrowser(user: User){
    this.userService.navigateToBrowse(user)
  }

  ngOnInit(): void {
    this.usersSubscription = this.userService.users$.subscribe(users => this.users = users) 
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe()
  }

}
