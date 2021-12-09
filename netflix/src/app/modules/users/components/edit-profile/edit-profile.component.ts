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
    language: new FormControl(this.user?.language, [Validators.required]),
    imgUrl: new FormControl('', [Validators.required]),
    isKid: new FormControl(''),
    autoplayNext: new FormControl(this.user?.autoplayNext),
    autoplayPreview: new FormControl(this.user?.autoplayPreview)
  })

  get autoplayNext(): AbstractControl{
    return this.editUserForm.get('autoplayNext')! as AbstractControl
  }

  get autoplayPreview(): AbstractControl{
    return this.editUserForm.get('autoplayPreview')! as AbstractControl
  }

  get language(): AbstractControl{
    return this.editUserForm.get('language')! as AbstractControl 
  }

  constructor() { }

  edit(){
    const editedUser: User =  {
      ...this.editUserForm.value,
      id: this.user?.id 
    };
    this.onEdit.emit(editedUser)
  }

  ngOnInit(): void {
    this.user && this.editUserForm.patchValue(this.user);
    this.language.setValue(this.user?.language, {onlySelf: true}) ;
  }

}
