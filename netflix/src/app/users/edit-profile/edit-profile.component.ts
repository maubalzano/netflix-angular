import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'netflix-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  @Input() user?: User;
  @Output() onCancel = new EventEmitter();
  @Output() onEdit = new EventEmitter<User>();

  langs: string[] = ['Italiano', 'English', 'Deutch'];

  editUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    language: new FormControl('', [Validators.required]),
    imgUrl: new FormControl('', [Validators.required]),
    isKid: new FormControl(''),
    autoplayNext: new FormControl(''),
    autoplayPreview: new FormControl('')
  })

  get autoPlayNext(): AbstractControl{
    return this.editUserForm.get('autoplayNext')!.value
  }

  get autoPlayPreview(): AbstractControl{
    return this.editUserForm.get('autoPlayPreview')!.value
  }

  get language(): AbstractControl{
    return this.editUserForm.get('language')!.value
  }

  constructor() { }

  edit(){

  }

  ngOnInit(): void {
    this.user && this.editUserForm.setValue(this.user);
    console.log(this.editUserForm.value)
  }

}
