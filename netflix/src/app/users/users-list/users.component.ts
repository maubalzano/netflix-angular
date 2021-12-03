import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user';

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

  profileToEdit?: User;
  showEditForm = false;

  constructor() { }

  ngOnInit(): void {
  }

}
