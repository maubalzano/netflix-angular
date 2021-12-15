import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { getCurrentUser, getUsers } from 'src/app/state/user/user.selectors';
import { userState } from 'src/app/state/user/user.state';
import { CatalogueService } from '../../services/catalogue.service';

@Component({
  selector: 'netflix-browse-container',
  templateUrl: './browse-container.component.html',
  styleUrls: ['./browse-container.component.scss']
})
export class BrowseContainerComponent implements OnInit {

  public currentUser!: number;
  public users!: User[];

  constructor(
    private store: Store<{user: userState}>,
    private catalogue: CatalogueService
    ) { }

  ngOnInit(): void {
    this.store.select(getUsers).subscribe(users => this.users = users);
    this.store.select(getCurrentUser).subscribe(currentUser => this.currentUser = currentUser);
  }

}
