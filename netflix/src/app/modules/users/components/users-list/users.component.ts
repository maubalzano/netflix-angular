import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'netflix-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @Input() users!: User[]
  @Input() canEdit!: boolean;
  @Output() newUser = new EventEmitter();
  @Output() showEditProfile = new EventEmitter<User>();
  @Output() navigateToBrowser = new EventEmitter<User>();

  profileToEdit?: User;
  showEditForm = false;

  constructor() { }

  onClick(user: User){
    if (this.canEdit) {
      this.showEditProfile.emit(user)
    } else {
      this.navigateToBrowser.emit(user)
    }
  }

  ngOnInit(): void {
  }
}
