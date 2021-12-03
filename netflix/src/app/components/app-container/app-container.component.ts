import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, Event } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'netflix-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss']
})
export class AppContainerComponent implements OnInit {
  route!: string;
  constructor(private router: Router ) { }

  ngOnInit(): void {
    this.route = this.router.url;
    this.router.events.pipe(
      filter((ev: Event) => ev instanceof NavigationStart))
      .subscribe((value: any) => this.route = value.url)
  }

}
