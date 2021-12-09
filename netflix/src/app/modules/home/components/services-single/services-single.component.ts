import { Component, Input, OnInit } from '@angular/core';
import { NFService } from 'src/assets/NetflixServices';

@Component({
  selector: 'netflix-services-single',
  templateUrl: './services-single.component.html',
  styleUrls: ['./services-single.component.scss']
})
export class ServicesSingleComponent implements OnInit {
@Input() service! : NFService
@Input() index! : number
  constructor() { }

  ngOnInit(): void {
  }

}
