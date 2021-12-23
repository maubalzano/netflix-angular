import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/shared/models/movie.model';
import { DetailResponse } from 'src/app/shared/models/productDetails.model';

@Component({
  selector: 'netflix-preview-card',
  templateUrl: './preview-card.component.html',
  styleUrls: ['./preview-card.component.scss']
})
export class PreviewCardComponent implements OnInit {

  @Input() preview!: Product;
  @Input() info?: DetailResponse;
  @Output() getProductDetails = new EventEmitter();

  public scale = false;

  constructor() { }

  getDetails(){
    this.scale = true;
    !this.info && this.getProductDetails.emit()
  }
  ngOnInit(): void {
  }

}
