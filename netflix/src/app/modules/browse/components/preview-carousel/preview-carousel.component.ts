import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/movie.model';
import { DetailResponse, indexedInfo } from 'src/app/shared/models/productDetails.model';

@Component({
  selector: 'netflix-preview-carousel',
  templateUrl: './preview-carousel.component.html',
  styleUrls: ['./preview-carousel.component.scss']
})
export class PreviewCarouselComponent implements OnInit {

  @Input() list$!: Observable<Product[][]>; 
  @Input() info!: indexedInfo;
  @Output() getProductDetails = new EventEmitter<{productId: number, productType: string}>();
  @Output() onOpenModal = new EventEmitter<{productId: number, productType: string}>();

  carouselArrows = false;

  constructor() { }

  ngOnInit(): void {
  }

}
