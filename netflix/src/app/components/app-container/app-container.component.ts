import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { getCurrentUser, getUsers } from 'src/app/state/user/user.selectors';
import { userState } from 'src/app/state/user/user.state';
import { User } from 'src/app/shared/models/user'
import { Store } from '@ngrx/store';

@Component({
  selector: 'netflix-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  public route!: string;
  public users$!: Observable<User[]>;
  public currentUser$!: Observable<number>

  constructor(
    private router: Router,
    private store: Store<{user: userState}>
     ) { }

  ngOnInit(): void {
    this.route = this.router.url;
    this.router.events.pipe(
      filter((ev: Event) => ev instanceof NavigationStart))
      .subscribe((value: any) => this.route = value.url);

    this.users$ = this.store.select(getUsers);
    this.currentUser$ = this.store.select(getCurrentUser)
  }

}
