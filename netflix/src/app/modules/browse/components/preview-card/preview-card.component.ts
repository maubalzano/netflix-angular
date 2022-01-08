import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/movie.model';
import { DetailResponse } from 'src/app/shared/models/productDetails.model';

@Component({
  selector: 'netflix-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit, AfterViewInit{

  @Input() preview!: Product;
  @Input() info?: DetailResponse;
  @Output() getProductDetails = new EventEmitter();

  @ViewChild('card', {static:true}) card!: ElementRef;

  public scale = false;

  constructor() { }

  getDetails(){
    // this.scale = true;
    // !this.info && this.getProductDetails.emit()
    // console.log('details')
    
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(){
    
    fromEvent(this.card.nativeElement, 'mouseover')
      .pipe(
        tap(() => this.scale = true),
        debounceTime(300))
      .subscribe(ev => {!this.info && this.getProductDetails.emit()});
    
    fromEvent(this.card.nativeElement, 'mouseleave')
        .subscribe(() => this.scale = false)
    
  }

}
