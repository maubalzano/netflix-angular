import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/models/user';
import { SharedState } from 'src/app/state/shared.state';
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
    private store: Store<SharedState>,
    private catalogue: CatalogueService
    ) { }



  ngOnInit(): void {

  }

}
