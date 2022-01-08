import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'netflix-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  @Output() search = new EventEmitter<string>();
  @Output() navigateHome = new EventEmitter();
  @Input() route!: string
  @Input() users$!: Observable<User[]>;
  @Input() currentUser$!: Observable<number>;

  showUsersMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

}
