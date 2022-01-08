import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user'
import { select, Store } from '@ngrx/store';
import { SharedState } from 'src/app/state/shared.state';
import { getCurrentUser, getUsers } from 'src/app/state/shared.selectors';
import { search } from 'src/app/state/search/search.actions';

@Component({
  selector: 'netflix-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})


export class AppContainerComponent implements OnInit {
  public route!: string;
  public navbarBgBlack = false;
  public users$!: Observable<User[]>;
  public currentUser$!: Observable<number>
  
  @HostListener('window:scroll', ['$event'])
  onScroll(){
    this.navbarBgBlack = document.documentElement.scrollTop > 20 ? true : false
  }
  constructor(
    private router: Router,
    private store: Store<SharedState>
    ) { }

  search(value: string){
    this.store.dispatch(search({value}));
    this.route != '/browse/search' && this.router.navigate(['/browse/search'])
  }

  navigateHome(){
    this.router.navigate(['/browse/home'])
  }
    
  ngOnInit(): void {
    this.route = this.router.url;
    this.router.events.pipe(
      filter((ev: Event) => ev instanceof NavigationStart))
      .subscribe((value: any) => this.route = value.url);

    this.users$ = this.store.pipe(select(getUsers));
    this.currentUser$ = this.store.pipe(select(getCurrentUser))
  }

}
