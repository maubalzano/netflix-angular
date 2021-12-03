import { Component, Input, OnInit } from '@angular/core';
import { footerLink } from 'src/app/models/footerLink';
import { footerLinks } from 'src/assets/FooterLinks';

@Component({
  selector: 'netflix-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input() route!: string;
  links: footerLink[] = footerLinks;

  constructor() { }

  ngOnInit(): void {  
  }

}
