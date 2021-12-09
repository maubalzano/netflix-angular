import { Component, Input, OnInit } from '@angular/core';
import { Faq } from 'src/app/models/Faq';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'netflix-faq-single',
  templateUrl: './faq-single.component.html',
  styleUrls: ['./faq-single.component.scss'],
  animations: [
    trigger(
      'toggle',
      [
        transition(
          ':enter',
          [
            style({ maxHeight:0}),
            animate('0.4s ease-out',
              style({ maxHeight: 600}))
          ]
        ),
        transition(
          ':leave',
            [
              style({ maxHeight:600}),
              animate('0.4s ease-in',
                style({maxHeight:0}))
            ]
        )
      ]
    )
  ],
})
export class FaqSingleComponent implements OnInit {
  @Input() faq!: Faq;
  constructor() { }

  toggleAnswer(){
    this.faq.showAnswer = !this.faq.showAnswer
  }

  ngOnInit(): void {
  }

}
