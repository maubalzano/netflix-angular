import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'netflix-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {
  lang: string = 'Italiano';
  constructor() { }

  ngOnInit(): void {
  }

}
