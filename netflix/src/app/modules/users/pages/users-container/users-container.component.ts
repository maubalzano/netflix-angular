import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { trigger, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { addUser, editUser, setCurrentUser } from 'src/app/state/user/user.actions';
import { Router } from '@angular/router';
import { getUsers } from 'src/app/state/shared.selectors';
import { SharedState } from 'src/app/state/shared.state';

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

  constructor( 
      private store: Store<SharedState>,
      private router: Router
    ) { }

  addUser(user: User){
    this.store.dispatch(addUser({value: user}));
    this.showAddUser = false;
  }

  editUser(user: User){
    this.store.dispatch(editUser({value: user}));
    this.showEditUser = false
  }

  showEditProfile(user: User){
    this.profileToEdit = user;
    this.showEditUser = true
  }

  navigateToBrowser(user: User){
    this.store.dispatch(setCurrentUser({value: user.id}));
    this.router.navigate(['browse'])
  }

  ngOnInit(): void {
    this.usersSubscription = this.store.select(getUsers).subscribe(users => this.users = users) 
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe()
  }

}
