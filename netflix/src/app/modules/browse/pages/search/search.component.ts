import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/movie.model';
import { indexedInfo } from 'src/app/shared/models/productDetails.model';
import { getSearchResults } from 'src/app/state/shared.selectors';
import { getInfo } from '../../store/info/actions.info';
import { getProductInfo } from '../../store/info/selectors.info';

@Component({
  selector: 'netflix-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchResults$!: Observable<Product[]>;
  info!: indexedInfo;
  constructor(
    private readonly store: Store
  ) { }

  getProductDetails(product: {productId: number, productType:string}){
    this.store.dispatch(getInfo(product))
  }
  ngOnInit(): void {
    this.searchResults$ = this.store.select(getSearchResults);
    this.store.select(getProductInfo).subscribe(info => this.info = info)
  }

}
