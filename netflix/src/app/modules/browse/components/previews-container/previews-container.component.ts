import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/movie.model';
import { indexedInfo } from 'src/app/shared/models/productDetails.model';
import { CatalogueService } from '../../services/catalogue.service';
import { getInfo } from '../../store/info/actions.info';
import { getProductInfo } from '../../store/info/selectors.info';
import { getPopulars } from '../../store/previews/actions.previews';
import { getPopularMovies, getPopularSeries } from '../../store/previews/selectors.previews';

@Component({
  selector: 'netflix-previews-container',
  templateUrl: './previews-container.component.html',
  styleUrls: ['./previews-container.component.scss']
})
export class PreviewsContainerComponent implements OnInit {

  movies$!: Observable<Product[][]>;
  series$!: Observable<Product[][]>;
  info!: indexedInfo;

  constructor(
    private readonly catalogue: CatalogueService,
    private store: Store
  ) { }

  getPops(){

    this.store.dispatch(getPopulars({value: 'tv'}));
    this.store.dispatch(getPopulars({value: 'movie'}));
    
  }

  getProductDetails(product: {id: number, type:string}){
    this.store.dispatch(getInfo({product: product}))
  }

  ngOnInit(): void {
    this.movies$ = this.store.pipe(select(getPopularMovies));
    this.series$ = this.store.pipe(select(getPopularSeries))
    this.store.pipe(select(getProductInfo)).subscribe(info => this.info = info)
  }

}
