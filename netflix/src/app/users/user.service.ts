import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user';
import { users } from 'src/assets/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = users;
  users$ = new BehaviorSubject<User[]>(this.users);

  constructor() { }

  addUser(user: User){
    const newUser: User = {
      ...user
    };
    this.users.push(newUser);
    this.users$.next(this.users)
  }
}
