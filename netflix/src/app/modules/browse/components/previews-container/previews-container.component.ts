import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { onModalOpen } from 'src/app/shared/animations/modal.animation';
import { Product } from 'src/app/shared/models/movie.model';
import { DetailResponse, indexedInfo } from 'src/app/shared/models/productDetails.model';
import { closeInfo, getInfo, openInfo } from '../../store/info/actions.info';
import { getModalInfo, getProductInfo } from '../../store/info/selectors.info';
import { getPopulars } from '../../store/previews/actions.previews';
import { getPopularMovies, getPopularSeries } from '../../store/previews/selectors.previews';

@Component({
  selector: 'netflix-previews-container',
  templateUrl: './previews-container.component.html',
  styleUrls: ['./previews-container.component.scss'],
  animations: [onModalOpen]
})
export class PreviewsContainerComponent implements OnInit {

  movies$!: Observable<Product[][]>;
  series$!: Observable<Product[][]>;
  info!: indexedInfo;
  currentModalInfo$!: Observable<DetailResponse | undefined>;
  showModal = false;

  constructor(
    private store: Store
  ) { }

  getPops(){

    this.store.dispatch(getPopulars({value: 'tv'}));
    this.store.dispatch(getPopulars({value: 'movie'}));
    
  }

  getProductDetails(product: {productId: number, productType:string}){

    this.store.dispatch(getInfo(product))
  }

  openModal(product: {productId: number, productType: string}){
    this.store.dispatch(openInfo(product))
  }

  closeModal(){
    this.store.dispatch(closeInfo())
  }

  ngOnInit(): void {
    this.getPops();
    this.movies$ = this.store.pipe(select(getPopularMovies));
    this.series$ = this.store.pipe(select(getPopularSeries))
    this.store.pipe(select(getProductInfo)).subscribe(info => this.info = info);
    this.currentModalInfo$ = this.store.select(getModalInfo)
  }

}
