import { Component, OnInit } from '@angular/core';
import { Faq } from 'src/app/models/Faq';
import { FAQLIST} from 'src/assets/FaqList';

@Component({
  selector: 'netflix-faq-container',
  templateUrl: './faq-container.component.html',
  styleUrls: ['./faq-container.component.scss']
})
export class FaqContainerComponent implements OnInit {
  faqList:Faq[] = FAQLIST;

  constructor() { }

  ngOnInit(): void {
  }

}
