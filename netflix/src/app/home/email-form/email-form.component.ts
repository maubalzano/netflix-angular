import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'netflix-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss']
})
export class EmailFormComponent implements OnInit {

  constructor() { }

  submitForm(emailForm: NgForm){
    console.log(emailForm)
  }

  ngOnInit(): void {
  }

}
