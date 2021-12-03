import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'netflix-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {

  @Output() onAddUser = new EventEmitter<User>()
  @Output() onCancel = new EventEmitter()

  newUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    isKid: new FormControl(false, [Validators.required]),
    imgUrl: new FormControl('https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg', [Validators.required])
  })

  constructor() { }

  onConfirm(){
    const newUser: User = {
      name: this.newUserForm.get('name')!.value,
      isKid: this.newUserForm.get('isKid')!.value,
      imgUrl: this.newUserForm.get('imgUrl')!.value,
      autoplayNext: true,
      autoplayPreview: true,
      language: 'italian'
    }
    this.newUserForm.valid && this.onAddUser.emit(newUser)
  }

  ngOnInit(): void {
  }

}
